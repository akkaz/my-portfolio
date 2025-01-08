const it = {
  welcome: `Ciao! ✨ Sono Gio Marco Baglioni (akkaz), sviluppatore software.

Comandi disponibili:

  help     📋   Mostra tutti i comandi
  about    👤   Chi sono
  skills   🛠️    Competenze tecniche
  projects 💼   I miei progetti
  contact  📧   Contattami
  clear    🗑️    Pulisci terminale

Digita un comando e premi Invio per eseguirlo.
`,

  commandPrompt: "ospite@portfolio:~$",

  commands: {
    help: {
      description: "Mostra i comandi disponibili",
      output: `Comandi disponibili:

  help     📋   Mostra questo messaggio
  about    👤   Chi sono
  skills   🛠️    Competenze tecniche
  projects 💼   I miei progetti
  contact  📧   Contattami
  clear    🗑️    Pulisci terminale
  lang     🌐   Cambia lingua (en/it)
`,
    },
    about: {
      description: "Informazioni su di me",
      output: `Chi Sono:

Sono uno sviluppatore software appassionato di creare soluzioni eleganti per problemi complessi.
Mi specializzo nello sviluppo full-stack, con esperienza in tecnologie web moderne e architettura cloud.

Ho esperienza con diverse tecnologie tra cui:
• Frontend: React, Vue.js, TypeScript
• Backend: Node.js, Python, Java
• Cloud: AWS, Docker, Kubernetes
• Database: PostgreSQL, MongoDB, Redis

Attualmente lavoro su progetti interessanti nel settore web3 ed esploro nuove tecnologie.`,
    },
    skills: {
      description: "Visualizza competenze tecniche",
      output: `Competenze Tecniche:

Linguaggi di Programmazione:
• JavaScript/TypeScript
• Python
• Java
• SQL

Frontend:
• React.js
• Vue.js
• HTML5/CSS3
• Design Responsivo

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
      description: "Visualizza i miei progetti",
      output: `Progetti Notevoli:

1. Portfolio Terminale Interattivo (Questo sito!)
   • Interfaccia terminale interattiva basata su React
   • Sistema personalizzato di elaborazione comandi
   • Design responsivo e animazioni
   
2. Piattaforma di Analisi Blockchain
   • Analisi dati cryptocurrency in tempo reale
   • Grafici avanzati e visualizzazione
   • Integrazione API con diversi exchange

3. Microservizi E-commerce
   • Architettura a microservizi
   • Design event-driven
   • Sistema di caching ad alte prestazioni

4. Task Manager con AI
   • Elaborazione del linguaggio naturale
   • Machine learning per la prioritizzazione
   • Funzionalità di collaborazione in tempo reale`,
    },
    contact: {
      description: "Ottieni informazioni di contatto",
      output: `Informazioni di Contatto:

Email: gio.marco.baglioni@gmail.com
GitHub: github.com/akkaz
LinkedIn: linkedin.com/in/giomarcobaglioni

Non esitare a contattarmi per collaborazioni o opportunità!`,
    },
    lang: {
      description: "Cambia lingua (en/it)",
      output: "Lingua cambiata in Italiano",
    },
    clear: {
      description: "Pulisci il terminale",
    },
  },

  errors: {
    commandNotFound: "Comando non trovato. Digita 'help' per vedere i comandi disponibili.",
    genericError: "Si è verificato un errore durante l'elaborazione del comando.",
  },
  
  inputPlaceholder: "Scrivi il comando e premi Invio"
};

export default it;