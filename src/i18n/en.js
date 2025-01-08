const en = {
  welcome: `Hey! ✨ I'm Gio Marco Baglioni (akkaz), a software developer.

Available commands:

  help     📋   Show all commands
  about    👤   Learn about me
  skills   🛠️    View my technical skills
  projects 💼   Browse my work
  contact  📧   Get in touch
  clear    🗑️    Clean terminal

Type a command and press Enter to execute.
`,
  
  commandPrompt: "guest@portfolio:~$",
  
  commands: {
    help: {
      description: "Show available commands",
      output: `Available commands:

  help     📋   Show this help message
  about    👤   Learn about me
  skills   🛠️    View my technical skills
  projects 💼   Browse my work
  contact  📧   Get in touch
  clear    🗑️    Clean terminal
  lang     🌐   Change language (en/it)
`,
    },
    about: {
      description: "Learn about me",
      output: `About Me:

I'm a software developer with a passion for creating elegant solutions to complex problems. 
I specialize in full-stack development, with expertise in modern web technologies and cloud architecture.

I have experience working with various technologies including:
• Frontend: React, Vue.js, TypeScript
• Backend: Node.js, Python, Java
• Cloud: AWS, Docker, Kubernetes
• Database: PostgreSQL, MongoDB, Redis

Currently working on exciting projects in the web3 space and exploring new technologies.`,
    },
    skills: {
      description: "View technical skills",
      output: `Technical Skills:

Programming Languages:
• JavaScript/TypeScript
• Python
• Java
• SQL

Frontend:
• React.js
• Vue.js
• HTML5/CSS3
• Responsive Design

Backend:
• Node.js
• Express
• Django
• Spring Boot

Cloud & DevOps:
• AWS
• Docker
• Kubernetes
• CI/CD

Database:
• PostgreSQL
• MongoDB
• Redis
• Elasticsearch`,
    },
    projects: {
      description: "View my projects",
      output: `Notable Projects:

1. Interactive Terminal Portfolio (This website!)
   • React-based interactive terminal interface
   • Custom command processing system
   • Responsive design and animations
   
2. Blockchain Analytics Platform
   • Real-time cryptocurrency data analysis
   • Advanced charting and visualization
   • API integration with multiple exchanges

3. E-commerce Microservices
   • Microservices architecture
   • Event-driven design
   • High-performance caching system

4. AI-Powered Task Manager
   • Natural language processing
   • Machine learning for task prioritization
   • Real-time collaboration features`,
    },
    contact: {
      description: "Get contact information",
      output: `Contact Information:

Email: gio.marco.baglioni@gmail.com
GitHub: github.com/akkaz
LinkedIn: linkedin.com/in/giomarcobaglioni

Feel free to reach out for collaborations or opportunities!`,
    },
    lang: {
      description: "Change language (en/it)",
      output: "Language changed to English",
    },
    clear: {
      description: "Clear the terminal",
    },
  },
  
  errors: {
    commandNotFound: "Command not found. Type 'help' to see available commands.",
    genericError: "An error occurred while processing your command.",
  },
  
  inputPlaceholder: "Type a command and press Enter"
};

export default en;