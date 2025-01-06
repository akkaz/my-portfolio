import React, { useState, useEffect } from 'react';
import './StreamingText.css';

const StreamingText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    
    useEffect(() => {
        let index = 0;
        setDisplayedText('');
        setIsComplete(false);
        
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(prev => prev + text[index]);
                index++;
            } else {
                setIsComplete(true);
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, 10);
        
        return () => clearInterval(interval);
    }, [text, onComplete]);
    
    return (
        <div className="streaming-text">
            {displayedText}
            {!isComplete && <span className="cursor"/>}
        </div>
    );
};

export default StreamingText;