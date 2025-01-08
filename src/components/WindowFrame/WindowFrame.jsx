<<<<<<< HEAD
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './WindowFrame.css';

const WindowFrame = ({ children }) => {
    const { language, setLanguage } = useLanguage();

=======
import React, { useEffect, useState } from 'react';
import './WindowFrame.css';

const WindowFrame = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);
>>>>>>> a032949d (feat: Add mobile responsiveness and clean up project structure)
    const handleHomeClick = () => {
        // You can implement custom home button behavior here
        console.log('Home clicked');
    };

    return (
        <div className="window">
            <div className="title-bar">
                <div className="title-bar-left">
                    <button 
                        className="home-button" 
                        onClick={handleHomeClick}
                        title="Home"
                    >
                        🏠
                    </button>
                    <div className="language-buttons">
                        <button 
                            className={`lang-button ${language === 'it' ? 'active' : ''}`}
                            onClick={() => setLanguage('it')}
                            title="Italiano"
                        >
                            🇮🇹
                        </button>
                        <button 
                            className={`lang-button ${language === 'en' ? 'active' : ''}`}
                            onClick={() => setLanguage('en')}
                            title="English"
                        >
                            🇬🇧
                        </button>
                    </div>
                    <div className="title-bar-text">portfolio</div>
                </div>
                <div className="title-bar-controls">
                    <button className="control-button minimize"></button>
                    <button className="control-button maximize"></button>
                    <button className="control-button close"></button>
                </div>
            </div>
            {children}
            {!isMobile && <div className="resize-handle" title="Resize"/>}
        </div>
    );
};

export default WindowFrame;