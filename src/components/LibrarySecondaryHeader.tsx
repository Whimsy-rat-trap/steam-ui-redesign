import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

// Filter SVG components
const FilterIcon1 = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.24606 6.92484C8.10981 10.6033 12.3437 16.0469 12.3437 16.0469V22.2188C12.3437 23.5766 13.4547 24.6875 14.8125 24.6875C16.1703 24.6875 17.2812 23.5766 17.2812 22.2188V16.0469C17.2812 16.0469 21.5151 10.6033 24.3789 6.92484C25.0084 6.11016 24.4283 4.9375 23.3914 4.9375H6.22122C5.19669 4.9375 4.61653 6.11016 5.24606 6.92484Z" fill="#76808C" />
    </svg>
);
const FilterIcon2 = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3030_42)">
            <path d="M14.9875 2.5C8.0875 2.5 2.5 8.1 2.5 15C2.5 21.9 8.0875 27.5 14.9875 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 14.9875 2.5ZM15 25C9.475 25 5 20.525 5 15C5 9.475 9.475 5 15 5C20.525 5 25 9.475 25 15C25 20.525 20.525 25 15 25ZM14.725 8.75H14.65C14.15 8.75 13.75 9.15 13.75 9.65V15.55C13.75 15.9875 13.975 16.4 14.3625 16.625L19.55 19.7375C19.975 19.9875 20.525 19.8625 20.775 19.4375C21.0375 19.0125 20.9 18.45 20.4625 18.2L15.625 15.325V9.65C15.625 9.15 15.225 8.75 14.725 8.75Z" fill="#76808C" />
        </g>
        <defs>
            <clipPath id="clip0_3030_42">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
const FilterIcon3 = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 19.875L19.3375 15.5C19.675 15.25 19.675 14.75 19.3375 14.5L13.5 10.125C13.0875 9.8125 12.5 10.1125 12.5 10.625V19.375C12.5 19.8875 13.0875 20.1875 13.5 19.875ZM15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25Z" fill="#76808C" />
    </svg>
);
const ViewFilterIcon1 = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_375_2479)">
            <path d="M5 17.5H7.5C8.1875 17.5 8.75 16.9375 8.75 16.25V13.75C8.75 13.0625 8.1875 12.5 7.5 12.5H5C4.3125 12.5 3.75 13.0625 3.75 13.75V16.25C3.75 16.9375 4.3125 17.5 5 17.5ZM5 23.5H7.5C8.1875 23.5 8.75 22.9375 8.75 22.25V19.75C8.75 19.0625 8.1875 18.5 7.5 18.5H5C4.3125 18.5 3.75 19.0625 3.75 19.75L3.75 22.25C3.75 22.9375 4.3125 23.5 5 23.5ZM5 11.5H7.5C8.1875 11.5 8.75 10.9375 8.75 10.25V7.75C8.75 7.0625 8.1875 6.5 7.5 6.5H5C4.3125 6.5 3.75 7.0625 3.75 7.75V10.25C3.75 10.9375 4.3125 11.5 5 11.5ZM10 7.75V22.25C10 22.9375 10.5625 23.5 11.25 23.5H23.75C24.4375 23.5 25 22.9375 25 22.25V7.75C25 7.0625 24.4375 6.5 23.75 6.5H11.25C10.5625 6.5 10 7.0625 10 7.75Z" fill="#F3F3F3" />
        </g>
        <defs>
            <clipPath id="clip0_375_2479">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
const ViewFilterIcon2 = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_375_2495)">
            <path d="M11.5384 23.5H16.7307C17.5384 23.5 18.1993 22.9009 18.1993 22.1686L18.1994 16.9078C18.1994 16.1756 17.5386 15.5765 16.7309 15.5765H11.5385C10.7308 15.5765 10.07 16.1756 10.07 16.9078L10.0698 22.1686C10.0698 22.9009 10.7307 23.5 11.5384 23.5ZM20.7692 23.5H26.2237C27.0314 23.5 27.6922 22.9009 27.6922 22.1686L27.6924 16.9078C27.6924 16.1756 27.0316 15.5765 26.2239 15.5765H20.7694C19.9617 15.5765 19.3009 16.1756 19.3009 16.9078L19.3007 22.1686C19.3007 22.9009 19.9615 23.5 20.7692 23.5ZM11.5385 14.6001H16.7309C17.5386 14.6001 18.1994 14.001 18.1994 13.2688L18.1994 7.83136C18.1994 7.09911 17.5386 6.5 16.7309 6.5H11.5385C10.7308 6.5 10.07 7.09911 10.07 7.83136L10.07 13.2688C10.07 14.001 10.7308 14.6001 11.5385 14.6001ZM19.3008 7.83136L19.3009 13.2688C19.3009 14.001 19.9617 14.6001 20.7694 14.6001H26.2239C27.0316 14.6001 27.6924 14.001 27.6924 13.2688L27.6924 7.83136C27.6924 7.09911 27.0316 6.5 26.2239 6.5H20.7694C19.9617 6.5 19.3008 7.09911 19.3008 7.83136Z" fill="#76808C" />
            <path d="M7.5 17.499H5C4.3125 17.499 3.75 16.9365 3.75 16.249V13.749C3.75 13.0615 4.3125 12.499 5 12.499H7.5C8.1875 12.499 8.75 13.0615 8.75 13.749V16.249C8.75 16.9365 8.1875 17.499 7.5 17.499Z" fill="#76808C" />
            <path d="M7.5 23.499H5C4.3125 23.499 3.75 22.9365 3.75 22.249V19.749C3.75 19.0615 4.3125 18.499 5 18.499H7.5C8.1875 18.499 8.75 19.0615 8.75 19.749V22.249C8.75 22.9365 8.1875 23.499 7.5 23.499Z" fill="#76808C" />
            <path d="M7.5 11.499H5C4.3125 11.499 3.75 10.9365 3.75 10.249V7.74902C3.75 7.06152 4.3125 6.49902 5 6.49902H7.5C8.1875 6.49902 8.75 7.06152 8.75 7.74902V10.249C8.75 10.9365 8.1875 11.499 7.5 11.499Z" fill="#76808C" />
        </g>
        <defs>
            <clipPath id="clip0_375_2495">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
const ViewFilterIcon3 = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_375_2638)">
            <path d="M11.5384 17.4993H26.4999C27.3076 17.4993 27.9685 16.9002 27.9685 16.168V13.8307C27.9685 13.0984 27.3076 12.4993 26.4999 12.4993H11.5384C10.7307 12.4993 10.0698 13.0984 10.0698 13.8307V16.168C10.0698 16.9002 10.7307 17.4993 11.5384 17.4993ZM11.5384 11.4993H26.4999C27.3076 11.4993 27.9685 10.9002 27.9685 10.168L27.9685 7.83038C27.9685 7.09814 27.3076 6.49902 26.5 6.49902H11.5384C10.7307 6.49902 10.0698 7.09814 10.0698 7.83038V10.168C10.0698 10.9002 10.7307 11.4993 11.5384 11.4993Z" fill="#76808C" />
            <path d="M26.4999 23.4993H11.5384C10.7307 23.4993 10.0698 22.9002 10.0698 22.168V19.8307C10.0698 19.0984 10.7307 18.4993 11.5384 18.4993H26.4999C27.3076 18.4993 27.9685 19.0984 27.9685 19.8307V22.168C27.9685 22.9002 27.3076 23.4993 26.4999 23.4993Z" fill="#76808C" />
            <path d="M7.5 17.499H5C4.3125 17.499 3.75 16.9365 3.75 16.249V13.749C3.75 13.0615 4.3125 12.499 5 12.499H7.5C8.1875 12.499 8.75 13.0615 8.75 13.749V16.249C8.75 16.9365 8.1875 17.499 7.5 17.499Z" fill="#76808C" />
            <path d="M7.5 23.499H5C4.3125 23.499 3.75 22.9365 3.75 22.249V19.749C3.75 19.0615 4.3125 18.499 5 18.499H7.5C8.1875 18.499 8.75 19.0615 8.75 19.749V22.249C8.75 22.9365 8.1875 23.499 7.5 23.499Z" fill="#76808C" />
            <path d="M7.5 11.499H5C4.3125 11.499 3.75 10.9365 3.75 10.249V7.99902C3.75 7.31152 4.3125 6.74902 5 6.74902H7.5C8.1875 6.74902 8.75 7.31152 8.75 7.99902V10.249C8.75 10.9365 8.1875 11.499 7.5 11.499Z" fill="#76808C" />
        </g>
        <defs>
            <clipPath id="clip0_375_2638">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const LibrarySecondaryHeader: React.FC = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('Home');

    const buttons = ['Home', 'Collections', 'News & Updates'];

    const handleClick = (btn: string) => {
        setActiveButton(btn);
        navigate(`/library/${btn.toLowerCase().replace(/ /g, '-')}`);
    };

    return (
        <div className="library-secondary-header">
            <div className="lib-nav-buttons">
                {buttons.map(btn => (
                    <button
                        key={btn}
                        className={`lib-nav-button ${activeButton === btn ? 'active' : ''}`}
                        onClick={() => handleClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
            <div className="lib-search-section">
                <Search />
                <div className="lib-filter-group">
                    <button className="filter-icon-btn"><FilterIcon1 /></button>
                    <button className="filter-icon-btn"><FilterIcon2 /></button>
                    <button className="filter-icon-btn"><FilterIcon3 /></button>
                </div>
            </div>
            <div className="lib-view-section">
                <button className="view-button">View</button>
                <div className="view-filter-group">
                    <button className="filter-icon-btn"><ViewFilterIcon1 /></button>
                    <button className="filter-icon-btn"><ViewFilterIcon2 /></button>
                    <button className="filter-icon-btn"><ViewFilterIcon3 /></button>
                </div>
            </div>
            <div className="lib-action-buttons">
                <button className="lib-action-btn" onClick={() => navigate('/library/activate-a-product')}>Activate a product</button>
                <button className="lib-action-btn" onClick={() => navigate('/library/add-a-non-steam-game')}>Add a non-Steam game</button>
            </div>
        </div>
    );
};

export default LibrarySecondaryHeader;