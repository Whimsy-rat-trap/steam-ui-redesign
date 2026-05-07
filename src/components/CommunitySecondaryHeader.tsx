import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CommunitySearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_280_54)">
            <path d="M12.9167 11.6667H12.2584L12.025 11.4417C13.025 10.275 13.5417 8.68334 13.2584 6.99167C12.8667 4.675 10.9334 2.825 8.60003 2.54167C5.07503 2.10834 2.10837 5.075 2.5417 8.6C2.82503 10.9333 4.67503 12.8667 6.9917 13.2583C8.68337 13.5417 10.275 13.025 11.4417 12.025L11.6667 12.2583V12.9167L15.2084 16.4583C15.55 16.8 16.1084 16.8 16.45 16.4583C16.7917 16.1167 16.7917 15.5583 16.45 15.2167L12.9167 11.6667ZM7.9167 11.6667C5.8417 11.6667 4.1667 9.99167 4.1667 7.91667C4.1667 5.84167 5.8417 4.16667 7.9167 4.16667C9.9917 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.9917 11.6667 7.9167 11.6667Z" fill="#4B619B" />
        </g>
        <defs>
            <clipPath id="clip0_280_54">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const DropdownArrow = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.76668 7.73984L10 10.9732L13.2334 7.73984C13.5584 7.41484 14.0834 7.41484 14.4084 7.73984C14.7334 8.06484 14.7334 8.58984 14.4084 8.91484L10.5834 12.7398C10.2584 13.0648 9.73335 13.0648 9.40835 12.7398L5.58335 8.91484C5.25835 8.58984 5.25835 8.06484 5.58335 7.73984C5.90835 7.42318 6.44168 7.41484 6.76668 7.73984Z" fill="#4B619B" />
    </svg>
);

const CommunitySecondaryHeader: React.FC = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('Home');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const communityButtons = ['Home', 'Discussions', 'Workshop', 'Market', 'Broadcasts'];

    const handleClick = (btn: string) => {
        setActiveButton(btn);
        navigate(`/community/${btn.toLowerCase().replace(/ /g, '-')}`);
    };

    const communityDropdownItems = [
        'Wallet', 'Settings', 'Client Updates', 'Go Offline', 'Change Account', 'Sign Out', 'Exit'
    ];

    const handleCommunityDropdown = (item: string) => {
        console.log('Community dropdown selected:', item);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    /*
    const handleSearchClick = () => {
        searchInputRef.current?.focus();
    };
    */

    const handleSearchIconClick = () => {
        // Perform search action
        console.log('Search clicked with query:', searchInputRef.current?.value);
    };

    return (
        <div className="community-secondary-header">
            <div className="community-nav-buttons">
                {communityButtons.map(btn => (
                    <button
                        key={btn}
                        className={`community-nav-button ${activeButton === btn ? 'active' : ''}`}
                        onClick={() => handleClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
            <div className="community-search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    className="community-search-input"
                    ref={searchInputRef}
                />
                <div className="community-search-inner">
                    <div className="community-dropdown-wrapper" ref={dropdownRef}>
                        <button
                            className="community-dropdown-trigger"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Community
                            <DropdownArrow />
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                {communityDropdownItems.map(item => (
                                    <button key={item} className="dropdown-item" onClick={() => handleCommunityDropdown(item)}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className="community-search-icon-btn" onClick={handleSearchIconClick}>
                        <CommunitySearchIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommunitySecondaryHeader;