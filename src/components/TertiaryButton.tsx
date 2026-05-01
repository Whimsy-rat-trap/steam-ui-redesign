import React from 'react';

interface TertiaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = ({ children, onClick }) => {
    return (
        <button className="btn-tertiary" onClick={onClick}>
            {children}
        </button>
    );
};

export default TertiaryButton;