import { Globe, Github, Linkedin, X } from 'lucide-react'

interface SidebarProps {
  activeConversation: string
  onSelectConversation: (id: string) => void
  isOpen: boolean
  onClose: () => void
}

const predefinedQuestions = [
  { id: 'introduction', label: 'Who am I?' },
  { id: 'experience', label: 'What is my professional experience?' },
  { id: 'education', label: 'What is my educational background?' },
  { id: 'projects', label: 'What projects have I worked on?' },
  { id: 'skills', label: 'What are my technical skills?' },
]

const socialLinks = [
  { 
    icon: Globe, 
    label: 'Blog', 
    href: 'https://blog.chhilif.com', 
    info: 'blog.chhilif.com' 
  },
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/AnasChhilif', 
    info: 'View my code' 
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://linkedin.com/in/anas-chhilif', 
    info: 'Connect with me' 
  },
]

export default function Sidebar({ activeConversation, onSelectConversation, isOpen, onClose }: SidebarProps) {
  return (
    <aside 
      className={`
        w-[290px] bg-[#141414] flex flex-col border-r border-[#2a2a2a] h-screen overflow-hidden flex-shrink-0
        fixed lg:relative z-30
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
    >
      {/* Header */}
      <div className="px-6 py-5 border-b border-[#2a2a2a] flex items-center justify-between">
        <h1 className="text-base font-semibold text-white tracking-tight">
          Chat History
        </h1>
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden text-[#a0a0a0] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Predefined Questions - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 py-5">
        <div>
          <h2 className="text-[11px] font-semibold text-[#666666] tracking-wider uppercase mb-3 px-2">
            PREDEFINED QUESTIONS
          </h2>
          <div className="flex flex-col gap-1">
            {predefinedQuestions.map((question) => (
              <button
                key={question.id}
                onClick={() => onSelectConversation(question.id)}
                className={`
                  relative text-left px-3 py-2.5 rounded-lg text-sm leading-relaxed
                  transition-all duration-200
                  ${activeConversation === question.id
                    ? 'bg-[#1a1a1a] text-white font-medium'
                    : 'text-[#a0a0a0] hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                {activeConversation === question.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3/5 bg-[#6366f1] rounded-r" />
                )}
                {question.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links - Fixed at bottom */}
      <div className="px-4 py-5 border-t border-[#2a2a2a]">
        <h2 className="text-[11px] font-semibold text-[#666666] tracking-wider uppercase mb-3 px-2">
          CONNECT
        </h2>
        <div className="flex flex-col gap-1">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#a0a0a0] hover:bg-white/5 hover:text-white transition-all duration-200 group"
              >
                <Icon className="w-5 h-5 text-[#a0a0a0] group-hover:text-[#6366f1] transition-colors duration-200 flex-shrink-0" />
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="text-sm font-medium truncate">{link.label}</span>
                  <span className="text-xs text-[#666666] truncate">{link.info}</span>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-[#2a2a2a] text-center">
        <p className="text-[11px] text-[#666666]">© 2025 Anas Chhilif</p>
      </div>
    </aside>
  )
}