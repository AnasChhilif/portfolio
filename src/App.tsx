import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ChatArea from './components/ChatArea'
import { conversationData } from './lib/conversations'
import { sendChatMessage, APIError, type Message as APIMessage } from './lib/api'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function App() {
  const [activeConversation, setActiveConversation] = useState<string>('introduction')
  const [messages, setMessages] = useState<Message[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const conversation = conversationData[activeConversation]
    if (conversation) {
      setMessages(conversation.messages)
    }
  }, [activeConversation])

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    // Add user message immediately
    const userMessage: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      // Prepare messages for API (convert to API format)
      const apiMessages: APIMessage[] = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
      
      // Add the new user message
      apiMessages.push({ role: 'user', content: text })

      // Call the API
      const response = await sendChatMessage(apiMessages)

      // Add assistant response
      const assistantMessage: Message = {
        role: 'assistant',
        content: response.message
      }
      
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      
      let errorMessage = 'Sorry, I encountered an error. Please try again.'
      
      if (error instanceof APIError) {
        if (error.status === 0) {
          errorMessage = '⚠️ Cannot connect to the backend server. Please make sure it\'s running on http://localhost:8000'
        } else if (error.status === 500 && error.message.includes('LLM_GATEWAY_API_KEY')) {
          errorMessage = '⚠️ LLM Gateway API key is not configured. Please check the backend .env file.'
        } else {
          errorMessage = `⚠️ ${error.message}`
        }
      }

      const errorResponse: Message = {
        role: 'assistant',
        content: errorMessage
      }
      
      setMessages((prev) => [...prev, errorResponse])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectConversation = (id: string) => {
    setActiveConversation(id)
    setIsSidebarOpen(false)
  }

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar 
        activeConversation={activeConversation} 
        onSelectConversation={handleSelectConversation}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <ChatArea 
        messages={messages} 
        onSendMessage={handleSendMessage}
        onMenuClick={() => setIsSidebarOpen(true)}
        isLoading={isLoading}
      />
      
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App