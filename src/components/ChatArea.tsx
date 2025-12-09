import { useState, useRef, useEffect } from 'react'
import { Send, User, Menu } from 'lucide-react'
import Message from './Message'

interface ChatAreaProps {
  messages: Array<{ role: 'user' | 'assistant'; content: string }>
  onSendMessage: (text: string) => void
  onMenuClick: () => void
}

export default function ChatArea({ messages, onSendMessage, onMenuClick }: ChatAreaProps) {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px'
    }
  }, [input])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onSendMessage(input)
      setInput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <main className="flex-1 flex flex-col bg-[#0a0a0a] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-b border-[#2a2a2a] bg-[#0a0a0a] flex-shrink-0">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Hamburger menu for mobile */}
          <button
            onClick={onMenuClick}
            className="lg:hidden text-[#a0a0a0] hover:text-white transition-colors flex-shrink-0"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-semibold text-white mb-0.5 sm:mb-1 tracking-tight truncate">
              Anas Chhilif Portfolio
            </h1>
            <p className="text-xs sm:text-sm text-[#666666] truncate">
              Full Stack Engineer - Software Architecture & Performance Optimization
            </p>
          </div>
        </div>
        
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] flex-shrink-0">
          <User className="w-[18px] h-[18px]" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center max-w-md px-6 sm:px-10 py-8 sm:py-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2 sm:mb-3 tracking-tight">
                Welcome to my portfolio!
              </h2>
              <p className="text-sm sm:text-base text-[#a0a0a0] leading-relaxed">
                Select a question from the sidebar to learn more about my experience, or ask your own question below.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto flex flex-col gap-3 sm:gap-4">
            {messages.map((message, index) => (
              <Message key={index} role={message.role} content={message.content} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 bg-[#0a0a0a] border-t border-[#2a2a2a] flex-shrink-0">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="relative flex items-end gap-2 sm:gap-3 bg-[#141414] border border-[#2a2a2a] rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-200 focus-within:border-[#6366f1] focus-within:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about my work..."
              rows={1}
              className="flex-1 bg-transparent border-none text-white text-sm sm:text-[15px] leading-relaxed resize-none outline-none placeholder:text-[#666666] max-h-[120px]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-[#6366f1] text-white w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:bg-[#7c3aed] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#6366f1] hover:shadow-lg hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
          <p className="text-[11px] sm:text-xs text-[#666666] mt-2 text-center">
            Press Enter to send, Shift + Enter for new line
          </p>
        </form>
      </div>
    </main>
  )
}