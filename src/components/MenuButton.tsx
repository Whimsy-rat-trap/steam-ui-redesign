import React from 'react';

interface MenuButtonProps {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ children, isActive, onClick }) => {
    return (
        <button className={`menu-button ${isActive ? 'active' : ''}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default MenuButton;