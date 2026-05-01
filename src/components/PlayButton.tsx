import React from 'react';

interface PlayButtonProps {
    onClick?: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
    return (
        <button className="btn-play" onClick={onClick}>
            Play
        </button>
    );
};

export default PlayButton;