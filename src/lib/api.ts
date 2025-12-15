export interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface ChatRequest {
  messages: Message[]
  system_prompt?: string
}

export interface ChatResponse {
  message: string
  model?: string
}

export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public details?: string
  ) {
    super(message)
    this.name = 'APIError'
  }
}

export async function sendChatMessage(
  messages: Message[],
  systemPrompt?: string
): Promise<ChatResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messages,
        system_prompt: systemPrompt
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new APIError(
        errorData.detail || 'Failed to get response from AI',
        response.status,
        JSON.stringify(errorData)
      )
    }

    const data: ChatResponse = await response.json()
    return data
  } catch (error) {
    if (error instanceof APIError) {
      throw error
    }
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new APIError(
        'Cannot connect to backend server.',
        0,
        error.message
      )
    }
    
    throw new APIError(
      'Unexpected error while communicating with AI',
      undefined,
      error instanceof Error ? error.message : String(error)
    )
  }
}