import React, { useState, useEffect, useMemo } from 'react';
import ClickableCommand from '../ClickableCommand/ClickableCommand';
import './StreamingText.css';

const StreamingText = ({ text, onComplete, onCommandClick }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    
    useEffect(() => {
        let index = 0;
        let timeoutId;
				setDisplayedText("");
				setIsComplete(false);

				const streamNextChar = () => {
					if (index < text.length) {
						setDisplayedText(text.substring(0, index + 1));
						index++;
						timeoutId = setTimeout(streamNextChar, 10);
					} else {
						setIsComplete(true);
						if (onComplete) onComplete();
					}
				};

				timeoutId = setTimeout(streamNextChar, 10);
        
        return () => {
					if (timeoutId) clearTimeout(timeoutId);
				};
    }, [text, onComplete]);
    
    // List of available commands to make clickable
    const commands = useMemo(() => ['help', 'about', 'skills', 'projects', 'contact', 'clear'], []);

    const renderText = (text) => {
        if (!text) return '';
        
        const parts = [];
        let currentIndex = 0;

        commands.forEach((command) => {
            const commandIndex = text.toLowerCase().indexOf(command, currentIndex);
            
            if (commandIndex !== -1) {
                // Add text before the command
                if (commandIndex > currentIndex) {
                    parts.push(text.substring(currentIndex, commandIndex));
                }
                
                // Add the clickable command
                parts.push(
                    <ClickableCommand 
                        key={`${command}-${commandIndex}`}
                        command={command}
                        onCommandClick={onCommandClick}
                    />
                );
                
                currentIndex = commandIndex + command.length;
            }
        });

        // Add remaining text
        if (currentIndex < text.length) {
            parts.push(text.substring(currentIndex));
        }

        return parts;
    };

    return (
        <div className="streaming-text">
            {renderText(displayedText)}
            {!isComplete && <span className="cursor"/>}
        </div>
    );
};

export default StreamingText;