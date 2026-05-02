import React, { useState, useRef, useEffect } from 'react';

const DownArrow = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.76668 7.7418L10 10.9751L13.2334 7.7418C13.5584 7.4168 14.0834 7.4168 14.4084 7.7418C14.7334 8.0668 14.7334 8.5918 14.4084 8.9168L10.5834 12.7418C10.2584 13.0668 9.73335 13.0668 9.40835 12.7418L5.58335 8.9168C5.25835 8.5918 5.25835 8.0668 5.58335 7.7418C5.90835 7.42513 6.44168 7.4168 6.76668 7.7418Z" fill="#F3F3F3" />
    </svg>
);

const AccountDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const menuItems = [
        'Account Details', 'Wallet', 'Settings', 'Client Updates',
        'Go Offline', 'Change Account', 'Sign Out', 'Exit'
    ];

    return (
        <div className="account-dropdown" ref={dropdownRef}>
            <div className="account-button" onClick={() => setIsOpen(!isOpen)}>
                <div className="pfp-placeholder"></div>
                <span className="account-name">Dummy</span>
                <span className="account-balance">$5.25</span>
                <div className="dropdown-arrow"><DownArrow /></div>
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    {menuItems.map(item => (
                        <button key={item} className="dropdown-item" onClick={() => { console.log(item); setIsOpen(false); }}>
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AccountDropdown;