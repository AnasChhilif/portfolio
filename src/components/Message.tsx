import { User, Sparkles } from 'lucide-react'

interface MessageProps {
  role: 'user' | 'assistant'
  content: string
}

export default function Message({ role, content }: MessageProps) {
  const isUser = role === 'user'

  return (
    <div 
      className={`flex gap-3 animate-[fadeIn_0.3s_ease-out] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      <div 
        className={`
          w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
          ${isUser 
            ? 'bg-[#6366f1] text-white' 
            : 'bg-[#1a1a1a] text-[#6366f1] border border-[#2a2a2a]'
          }
        `}
      >
        {isUser ? <User className="w-[18px] h-[18px]" /> : <Sparkles className="w-[18px] h-[18px]" />}
      </div>

      {/* Message Content */}
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} flex-1`}>
        <div 
          className={`
            max-w-[70%] px-4 py-3 rounded-2xl text-[15px] leading-relaxed
            ${isUser 
              ? 'bg-[#6366f1] text-white rounded-br-md' 
              : 'bg-[#1f1f1f] text-white border border-[#2a2a2a] rounded-bl-md'
            }
          `}
        >
          {content.split('\n\n').map((paragraph, idx) => (
            <div key={idx} className={idx > 0 ? 'mt-3' : ''}>
              {paragraph.split('\n').map((line, lineIdx) => {
                // Handle bold text with **text**
                if (line.includes('**')) {
                  const parts = line.split(/(\*\*.*?\*\*)/g)
                  return (
                    <p key={lineIdx} className={lineIdx > 0 ? 'mt-2' : ''}>
                      {parts.map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={partIdx} className="font-semibold">
                              {part.slice(2, -2)}
                            </strong>
                          )
                        }
                        return <span key={partIdx}>{part}</span>
                      })}
                    </p>
                  )
                }
                
                // Handle bullet points
                if (line.startsWith('•') || line.startsWith('-')) {
                  return (
                    <p key={lineIdx} className={`${lineIdx > 0 ? 'mt-1.5' : ''} pl-4`}>
                      {line}
                    </p>
                  )
                }
                
                // Regular line
                return line ? (
                  <p key={lineIdx} className={lineIdx > 0 ? 'mt-2' : ''}>
                    {line}
                  </p>
                ) : null
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}