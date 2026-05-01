import React from 'react';

interface PauseButtonProps {
    onClick?: () => void;
}

const PauseButton: React.FC<PauseButtonProps> = ({ onClick }) => {
    return (
        <button className="btn-pause" onClick={onClick}>
            Pause
        </button>
    );
};

export default PauseButton;