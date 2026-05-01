import React from 'react';

interface InstallButtonProps {
    onClick?: () => void;
}

const InstallButton: React.FC<InstallButtonProps> = ({ onClick }) => {
    return (
        <button className="btn-install" onClick={onClick}>
            Install
        </button>
    );
};

export default InstallButton;