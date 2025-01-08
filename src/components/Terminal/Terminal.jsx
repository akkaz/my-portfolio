import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import StreamingText from '../StreamingText';
import WindowFrame from '../WindowFrame';
import CommandProcessor from '../../services/commandProcessor';
import commands from '../../data/commands';
import './Terminal.css';

const Terminal = () => {
    const { t, language } = useLanguage();
    const [history, setHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [hasShownHelp, setHasShownHelp] = useState(false);
    const terminalRef = useRef(null);
    const inputRef = useRef(null);
    const commandProcessor = useRef(new CommandProcessor());

    useEffect(() => {
        commandProcessor.current.setCommands(commands);
        // Initial welcome message
        setHistory([
            {
                id: Date.now(),
                text: t('welcome'),
                type: "system",
                streaming: true,
            },
        ]);
        inputRef.current?.focus();
    }, [language, t]); // Re-run when language changes

    const scrollToBottom = () => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;

        const command = inputValue.trim().toLowerCase();
        let result = commandProcessor.current.process(command);

        // If command not found
        if (!result) {
            result = {
                output: t('errors.commandNotFound'),
                type: 'error'
            };
        }
        
        if (result.type === 'clear') {
            setHistory([]);
            setHasShownHelp(false);
        } else {
            const newHistory = [
                ...history,
                { id: Date.now(), text: inputValue, type: 'prompt' },
                { 
                    id: Date.now() + 1, 
                    text: result.output,
                    type: result.type || 'error',
                    streaming: true 
                }
            ];
            setHistory(newHistory);
        }

        setInputValue('');
    };

    const handleCommandClick = (command) => {
        setInputValue(command);
        inputRef.current?.focus();
    };

    const handleWelcomeComplete = () => {
        if (!hasShownHelp) {
            const helpResult = commandProcessor.current.process('help');
            if (helpResult) {
                setHistory(prev => [...prev, {
                    id: Date.now(),
                    text: helpResult.output,
                    type: helpResult.type,
                    streaming: true
                }]);
                setHasShownHelp(true);
            }
        }
    };

    return (
        <WindowFrame>
            <div className="terminal" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
                <div className="terminal-content">
                    {history.map(entry => (
                        <div key={entry.id} className={`line ${entry.type}`}>
                            {entry.type === 'prompt' ? (
                                <div className="prompt">{entry.text}</div>
                            ) : entry.streaming ? (
                                <StreamingText 
                                    text={entry.text} 
                                    onComplete={
                                        entry.text.includes("Welcome to my interactive portfolio") 
                                            ? handleWelcomeComplete 
                                            : undefined
                                    }
                                    onCommandClick={handleCommandClick}
                                />
                            ) : (
                                <StreamingText text={entry.text} />
                            )}
                        </div>
                    ))}
                    <div className="input-line">
                        <span className="input-prefix">{t('commandPrompt')} </span>
                        <div className="input-wrapper">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit(e);
                                    }
                                }}
                                spellCheck="false"
                                autoFocus
                                placeholder={t('inputPlaceholder')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </WindowFrame>
    );
};

export default Terminal;