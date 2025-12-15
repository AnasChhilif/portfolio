// src/lib/api.ts

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

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
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages,
        system_prompt: systemPrompt,
      } as ChatRequest),
    })

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
        'Cannot connect to backend server. Make sure it\'s running on ' + API_BASE_URL,
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

export async function checkHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`)
    return response.ok
  } catch {
    return false
  }
}