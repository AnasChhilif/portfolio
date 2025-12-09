import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ChatArea from './components/ChatArea'
import { conversationData } from './lib/conversations'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function App() {
  const [activeConversation, setActiveConversation] = useState<string>('introduction')
  const [messages, setMessages] = useState<Message[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const conversation = conversationData[activeConversation]
    if (conversation) {
      setMessages(conversation.messages)
    }
  }, [activeConversation])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return
    const newMessages: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Thanks for your message! Feel free to explore the predefined topics in the sidebar to learn more about my experience, projects, and skills.`,
        },
      ])
    }, 800)
  }

  const handleSelectConversation = (id: string) => {
    setActiveConversation(id)
    setIsSidebarOpen(false) // Close sidebar on mobile after selection
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