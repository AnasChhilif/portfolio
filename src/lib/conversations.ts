export interface Conversation {
  id: string
  title: string
  messages: Array<{ role: 'user' | 'assistant'; content: string }>
}

export const conversationData: Record<string, Conversation> = {
  introduction: {
    id: 'introduction',
    title: 'Who am I?',
    messages: [
      {
        role: 'user',
        content: 'Who am I?',
      },
      {
        role: 'assistant',
        content: "I'm Anas Chhilif, a Full Stack Engineer based in Nice, France, with a strong passion for software architecture, performance optimization, and Kubernetes infrastructure management.\nI hold both a Master's in Management and Business Administration from IAE Nice and an Engineering Degree in Computer Science from Polytech Nice Sophia. I combine solid technical expertise with business acumen to build scalable and efficient solutions.\nI have 2 years of professional experience at Stiilt as a Full Stack Software Engineer, where I contributed to the development of high-performance, production-grade systems.\nI'm also an active competitive programmer — I ranked in the top 90 out of 400 participants in Thales Battledev 2024 and founded Sharkoders, a competitive coding club where I organize programming competitions.",
      },
    ],
  },
  experience: {
    id: 'experience',
    title: 'Professional Experience',
    messages: [
      {
        role: 'user',
        content: 'What is my professional experience?',
      },
      {
        role: 'assistant',
        content: "**Stiilt - Full Stack Engineer** (Sept 2023 - Sept 2025)\nNice, France\n\nI've been working in a dynamic startup environment, handling diverse responsibilities:\n\n• **Full Stack Development**: Architected and implemented solutions using Angular and NestJS, managing both frontend interfaces and backend APIs\n\n• **Mobile Development**: Maintained and optimized iOS and Android applications, ensuring cross-platform compatibility and performance\n\n• **DevOps & Infrastructure**: Managed and debugged Kubernetes infrastructures, including container orchestration and deployment pipelines\n\n• **Performance Optimization**: Achieved a 40% reduction in loading times through strategic code refactoring and caching implementations\n\n• **Client Dashboard**: Designed and developed a comprehensive fleet management system with real-time vehicle tracking, driver access control, and remote lock/unlock capabilities\n\n• **Payment Integration**: Implemented cobadged card compliance in mobile apps, creating interfaces for users to select preferred payment networks\n\nI work closely with product teams to deliver scalable solutions that meet both business requirements and user needs.",
      },
    ],
  },
  education: {
    id: 'education',
    title: 'Educational Background',
    messages: [
      {
        role: 'user',
        content: 'What is my educational background?',
      },
      {
        role: 'assistant',
        content: "**Polytech Nice Sophia** (Sept 2022 - Sept 2025)\nEngineering Degree in Computer Science\nSophia Antipolis, France\n\nRelevant coursework includes:\n• Software architecture and development operations\n• 3D Animations and Game development\n• Parallelism and CUDA programming\n• Functional Programming and Advanced Algorithms\n• Turing machines and Advanced networking\n• Software security and Middleware\n• Service Oriented Computing\n• Multimodal Interaction Techniques\n\n**IAE Nice** (Sept 2024 - Sept 2025)\nMaster's in Management and Business Administration\nNice, France\n\nSpecialized in management control and financial analysis, focusing on:\n• Strategic decision-making\n• Digital transformation\n• Financial analysis and control\n\n**Classes Préparatoires aux Grandes Écoles** (Sept 2020 - Jul 2022)\nCentrale & CCINP Competitions\nSettat, Morocco\n\nIntensive two-year program covering:\n• Mathematics: Real Analysis, Linear Algebra, Differential Equations, Probability, Topology\n• Computer Science: Python, SQL, Algorithms, Numerical methods\n• Physics and other fundamental sciences",
      },
    ],
  },
  projects: {
    id: 'projects',
    title: 'Projects',
    messages: [
      {
        role: 'user',
        content: 'What projects have I worked on?',
      },
      {
        role: 'assistant',
        content: "**Entervio** (Nov 2025 - Present)\nFounder & Lead Engineer\n\nAI-powered voice interview platform with real-time speech interaction. Built full-stack using:\n• React frontend for user interface\n• FastAPI backend for API services\n• Integration with Gemini, Whisper, and ElevenLabs APIs\n• Dynamic interviews with configurable AI personas\n• Comprehensive feedback system\n\n**DsEasy** (Sep 2023 - Present)\nSoftware Architect & Lead Developer\n\nExam generation service featuring:\n• Backend built with Go and SQLite\n• Database management with gomigrate and SQLc\n• RESTful API using gorilla/mux\n• Responsive frontend with React and Tailwind CSS\n• Continuous integration for seamless updates\n\n**Budgeteer** (Jul 2024 - Present)\nLead Developer\n\nCross-platform shared expense management application:\n• Backend API built with Kotlin and Spring Boot\n• Mobile application using Kotlin Multiplatform\n• Cross-platform compatibility (iOS and Android)\n• Continuous integration with GitHub Actions\n• Real-time expense tracking and sharing features\n\nAll projects demonstrate my commitment to clean architecture, modern development practices, and creating practical solutions.",
      },
    ],
  },
  skills: {
    id: 'skills',
    title: 'Technical Skills',
    messages: [
      {
        role: 'user',
        content: 'What are my technical skills?',
      },
      {
        role: 'assistant',
        content: "**Programming Languages**\n• JavaScript/TypeScript\n• Python\n• C/C++\n• Java\n• Go\n• Rust\n• Kotlin\n\n**Frontend Technologies**\n• React\n• Svelte\n• Angular\n• Tailwind CSS\n\n**Backend Frameworks**\n• Spring Boot\n• NestJS\n• FastAPI\n\n**DevOps & Cloud**\n• Kubernetes - Container orchestration and management\n• Docker - Containerization\n• Jenkins - CI/CD pipelines\n• GitHub Actions - Automated workflows\n• SonarQube - Code quality\n• GitLab & GitLab CI\n• Google Cloud Platform (GCP)\n• Amazon Web Services (AWS)\n\n**Competitive Programming**\n• Top 90 out of 400 in Thales Battledev 2024\n• Founder of Sharkoders (Competitive Coding club)\n• Organizer of programming competitions at Polytech Nice\n\n**Specializations**\n• Software Architecture\n• Performance Optimization\n• Infrastructure Management\n• Full Stack Development\n• Mobile Development (iOS & Android)",
      },
    ],
  },
}