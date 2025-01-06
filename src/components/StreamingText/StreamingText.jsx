import React, { useState, useEffect } from 'react';
import './StreamingText.css';

const StreamingText = ({ text, onComplete }) => {
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
    
    return (
        <div className="streaming-text">
            {displayedText}
            {!isComplete && <span className="cursor"/>}
        </div>
    );
};

export default StreamingText;