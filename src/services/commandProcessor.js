class CommandProcessor {
    constructor() {
        this.menuMap = {
            '1': 'about',
            '2': 'skills',
            '3': 'whoami'
        };

        this.navigationStack = ['main'];
        this.commands = {}; // Will be initialized with commands from commands.js
    }

    process(input) {
        const command = input.trim().toLowerCase();
        
        if (command === '') return null;

        if (command === '..') {
            if (this.navigationStack.length > 1) {
                this.navigationStack.pop();
                const previousPage = this.navigationStack[this.navigationStack.length - 1];
                return previousPage === 'main' 
                    ? this.commands.menu()
                    : this.commands[previousPage]();
            }
            return this.commands.menu();
        }

        if (this.menuMap[command]) {
            const mappedCommand = this.menuMap[command];
            this.navigationStack.push(mappedCommand);
            return this.commands[mappedCommand]();
        }

        if (this.commands[command]) {
            this.navigationStack.push(command);
            return this.commands[command]();
        }

        return {
            output: `Command not found: ${input}. Type 'help' for available commands.`,
            type: 'error'
        };
    }

    setCommands(commands) {
        this.commands = commands;
    }
}

export default CommandProcessor;