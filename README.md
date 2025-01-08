# Terminal Portfolio

An interactive terminal-style portfolio website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Features

- Interactive terminal interface with authentic command-line experience
- Command-based navigation with tab completion support
- Smooth streaming text effect for dynamic content display
- Resizable window with drag-and-drop support
- Fully responsive design that works on all devices
- Custom themes and color schemes
- Command history navigation

## Project Structure

```
src/
├── data/        # Command definitions and content
├── styles/      # Global and component styles
└── components/  # React components
    ├── Terminal/    # Terminal-related components
    └── shared/      # Reusable UI components
```

## Available Commands

- help: Show available commands
- about: Learn about me
- skills: View technical skills
- whoami: Quick introduction
- clear: Clear the terminal
- ..: Go back to previous page

## Tech Stack

- React
- CSS3
- Modern JavaScript