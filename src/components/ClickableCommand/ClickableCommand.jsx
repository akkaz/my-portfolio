import React from 'react';

const ClickableCommand = ({ command, onCommandClick }) => {
    return (
        <span 
            className="clickable-command"
            onClick={() => onCommandClick(command)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onCommandClick(command);
                }
            }}
        >
            {command}
        </span>
    );
};

export default ClickableCommand;