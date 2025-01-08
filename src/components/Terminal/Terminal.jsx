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
    const [currentPage, setCurrentPage] = useState('welcome');
    const [isPageTransitioning, setIsPageTransitioning] = useState(false);
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
        if (!inputValue.trim()) return;

        const command = inputValue.trim().toLowerCase();
        let result;
        
        try {
            // Pass the translation function to the command processor
            result = commandProcessor.current.process(command, t, currentPage, setCurrentPage, setIsPageTransitioning, setHistory);
        } catch (error) {
            result = {
                output: error.message,
                type: 'error'
            };
        }

        // If command not found
        if (!result) {
            result = {
                output: t('errors.commandNotFound'),
                type: 'error'
            };
        }
        
        if (result.type === 'clear') {
            setHistory([
                {
                    id: Date.now(),
                    text: result.output,
                    type: result.type || 'output',
                    streaming: result.type === 'output'
                }
            ]);
            setIsPageTransitioning(true);
            setTimeout(() => {
                setIsPageTransitioning(false);
            }, 300);
        } else {
            setHistory([
                {
                    id: Date.now(),
                    text: inputValue,
                    type: 'prompt'
                },
                {
                    id: Date.now() + 1, 
                    text: result.output,
                    type: result.type || 'output',
                    streaming: result.type === 'output'
                }
            ]);
        }

        setInputValue('');
    };

    const handleCommandClick = (command) => {
        setInputValue(command);
        inputRef.current?.focus();
    };

    const handleWelcomeComplete = () => {
        setCurrentPage('welcome');
        setHistory([
            {
                id: Date.now(),
                text: t('welcome'),
                type: "system",
                streaming: true,
            }
        ]);
        setIsPageTransitioning(true);
        setTimeout(() => {
            setIsPageTransitioning(false);
        }, 300);
    };

    const handleBackToWelcome = () => {
        setCurrentPage('welcome');
        setHistory([
            {
                id: Date.now(),
                text: t('welcome'),
                type: "system",
                streaming: true,
            }
        ]);
        setIsPageTransitioning(true);
        setTimeout(() => {
            setIsPageTransitioning(false);
        }, 300);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'help':
                return renderHelpPage();
            case 'about':
                return renderAboutPage();
            case 'skills':
                return renderSkillsPage();
            case 'projects':
                return renderProjectsPage();
            case 'contact':
                return renderContactPage();
            default:
                return (
                    <div className="terminal-content">
                        {history.map(entry => (
                            <div key={entry.id} className={`line ${entry.type}`}>
                                {entry.type === 'prompt' ? (
                                    <div className="prompt">$ {entry.text}</div>
                                ) : entry.type === 'output' ? (
                                    <div className="command-output">{entry.text}</div>
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
                            <span className="input-prefix">$ </span>
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
                                    autoComplete="off"
                                    autoCapitalize="none"
                                    autoCorrect="off"
                                    placeholder={t('inputPlaceholder')}
                                />
                            </div>
                        </div>
                        {currentPage !== 'welcome' && (
                            <div className="back-to-welcome" onClick={handleBackToWelcome}>
                                {t('backToWelcome')}
                            </div>
                        )}
                    </div>
                );
        }
    };

    const renderHelpPage = () => {
        return (
            <div className="terminal-content">
                <div className="content-section">
                    <div className="content-title">{t('commands.help.description')}</div>
                    <div className="content-body">
                        {t('commands.help.output')}
                    </div>
                </div>
                {currentPage !== 'welcome' && (
                    <div className="back-to-welcome" onClick={handleBackToWelcome}>
                        {t('backToWelcome')}
                    </div>
                )}
            </div>
        );
    };

    const renderAboutPage = () => {
        return (
            <div className="terminal-content">
                <div className="content-section">
                    <div className="content-title">{t('commands.about.description')}</div>
                    <div className="content-body">
                        {t('commands.about.output')}
                    </div>
                </div>
                {currentPage !== 'welcome' && (
                    <div className="back-to-welcome" onClick={handleBackToWelcome}>
                        {t('backToWelcome')}
                    </div>
                )}
            </div>
        );
    };

    const renderSkillsPage = () => {
        return (
            <div className="terminal-content">
                <div className="content-section">
                    <div className="content-title">{t('commands.skills.description')}</div>
                    <div className="content-body">
                        {t('commands.skills.output')}
                    </div>
                </div>
                {currentPage !== 'welcome' && (
                    <div className="back-to-welcome" onClick={handleBackToWelcome}>
                        {t('backToWelcome')}
                    </div>
                )}
            </div>
        );
    };

    const renderProjectsPage = () => {
        return (
            <div className="terminal-content">
                <div className="content-section">
                    <div className="content-title">{t('commands.projects.description')}</div>
                    <div className="content-body">
                        {t('commands.projects.output')}
                    </div>
                </div>
                {currentPage !== 'welcome' && (
                    <div className="back-to-welcome" onClick={handleBackToWelcome}>
                        {t('backToWelcome')}
                    </div>
                )}
            </div>
        );
    };

    const renderContactPage = () => {
        return (
            <div className="terminal-content">
                <div className="content-section">
                    <div className="content-title">{t('commands.contact.description')}</div>
                    <div className="contact-info">
                        <div>Email: gio.marco.baglioni@gmail.com</div>
                        <div>GitHub: github.com/akkaz</div>
                        <div>LinkedIn: linkedin.com/in/giomarcobaglioni</div>
                    </div>
                    <div className="contact-note">{t('commands.contact.note')}</div>
                </div>
                {currentPage !== 'welcome' && (
                    <div className="back-to-welcome" onClick={handleBackToWelcome}>
                        {t('backToWelcome')}
                    </div>
                )}
            </div>
        );
    };

    return (
        <WindowFrame>
            <div className={`terminal ${isPageTransitioning ? 'page-transitioning' : ''}`} ref={terminalRef} onClick={() => inputRef.current?.focus()}>
                {renderPage()}
            </div>
        </WindowFrame>
    );
};

export default Terminal;
