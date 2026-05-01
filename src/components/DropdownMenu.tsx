import React, { useState } from 'react';

interface DropdownMenuProps {
    options: string[];
    onSelect: (option: string) => void;
    triggerLabel: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect, triggerLabel }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: string) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
                {triggerLabel}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option) => (
                        <button key={option} className="dropdown-item" onClick={() => handleSelect(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;