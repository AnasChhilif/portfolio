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

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar 
        activeConversation={activeConversation} 
        onSelectConversation={setActiveConversation} 
      />
      <ChatArea 
        messages={messages} 
        onSendMessage={handleSendMessage} 
      />
    </div>
  )
}

export default App