import React from 'react';

interface SecondaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, onClick }) => {
    return (
        <button className="btn-secondary" onClick={onClick}>
            {children}
        </button>
    );
};

export default SecondaryButton;