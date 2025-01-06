const commands = {
	help: () => ({
		output: `
Here's how to navigate:
━━━━━━━━━━━━━━━━━━━━━━

📍 Basic Navigation:
   • Type a number [1,2,3] or use commands
   • Type '..' to go back
   • Type 'clear' to clean the screen

🎯 Available Commands:
   [1] about    👤 Get to know me
   [2] skills   💻 See my technical expertise
   [3] whoami   📌 Quick introduction

   menu     🏠 Show this menu again
   clear    🧹 Clean the screen
   ..       ⬅️  Go back

Just type a number or command and press Enter!`,
		type: "output",
	}),

	menu: () => ({
		output: `Main Menu 🏠
━━━━━━━━

[1] about    👤 Get to know me
[2] skills   💻 See my technical expertise
[3] whoami   📌 Quick introduction

Type a number or command and press Enter.
Type 'help' if you need assistance.`,
		type: "output",
	}),

	about: () => ({
		output: `About Me 👤
━━━━━━━━

Hey there! I'm Gio Marco Baglioni (aka akkaz) 👋

💡 What I Do:
   I'm a Web Developer and AI Expert who loves creating innovative
   solutions that combine traditional web development with
   cutting-edge AI technologies.

🔧 My Focus:
   • Building sophisticated web applications
   • Integrating AI solutions into web platforms
   • Creating smart, efficient development workflows
   • Pushing the boundaries of what's possible with AI

💪 My Expertise:
   • Advanced Web Development (Drupal & PHP)
   • AI Engineering & Integration
   • Technical Problem Solving
   • Prompt Engineering

Type 'skills' to see my technical expertise in detail.
Type '..' to go back to the menu.`,
		type: "output",
	}),

	skills: () => ({
		output: `Technical Expertise 💻
━━━━━━━━━━━━━━━━━

🌐 Web Development
{
    drupal    [██████████] Expert      // 8+ years experience
    php       [██████████] Expert      // Advanced backend solutions
    javascript[████████──] Advanced    // Modern JS & frameworks
}

🤖 AI & Machine Learning
{
    ai_engineering     [██████████] Expert   // Deep learning & ML
    prompt_engineering [██████████] Expert   // LLM & AI interaction
    llm_integration    [████████──] Advanced // AI-powered solutions
}

🛠️  Development Tools
{
    git       [████████──] Advanced    // Version control expert
    docker    [██████────] Intermediate// Container deployment
    ci_cd     [██████────] Intermediate// Automated workflows
}

Type '..' to go back to the menu.`,
		type: "output",
	}),

	whoami: () => ({
		output: `Quick Intro 📌
━━━━━━━━━━━

👋 Giomarco Baglioni (@akkaz)
💼 Web Developer & AI Expert

🔥 Core Skills:
   • Drupal & PHP Development
   • JavaScript Engineering
   • AI Integration
   • Prompt Engineering

Current focus: Merging web development with AI innovation

Type 'about' for my full story or 'skills' for detailed expertise.
Type '..' to go back to the menu.`,
		type: "output",
	}),

	clear: () => ({
		output: null,
		type: "clear",
	}),
};

export default commands;