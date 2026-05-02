import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AccountDropdown from './AccountDropdown';

const SteamIcon = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4581 0C4.9453 0 0.429149 4.25069 0 9.65266L5.62473 11.9782C6.10132 11.6523 6.67708 11.4613 7.29649 11.4613C7.352 11.4613 7.40727 11.4632 7.46207 11.4663L9.96343 7.84069C9.96343 7.82337 9.96319 7.80653 9.96319 7.78945C9.96319 5.60717 11.7384 3.83174 13.9209 3.83174C16.1032 3.83174 17.8784 5.60717 17.8784 7.78945C17.8784 9.97173 16.1032 11.7474 13.9209 11.7474C13.8908 11.7474 13.8609 11.7467 13.831 11.746L10.2635 14.2915C10.2654 14.3377 10.2671 14.3849 10.2671 14.4319C10.2671 16.0702 8.93456 17.4025 7.29649 17.4025C5.85863 17.4025 4.65635 16.3762 4.38401 15.0171L0.361539 13.3542C1.607 17.759 5.65391 20.9885 10.4581 20.9885C16.2541 20.9885 20.9524 16.2899 20.9524 10.4946C20.9524 4.69834 16.2538 0 10.4581 0Z" fill="#F3F3F3" />
        <path d="M6.57622 15.9237L5.28711 15.3911C5.51556 15.8668 5.91079 16.2651 6.43554 16.4838C7.56997 16.9564 8.87782 16.4181 9.35062 15.2827C9.57955 14.7337 9.58097 14.1276 9.35394 13.5772C9.12739 13.0266 8.6999 12.5973 8.15024 12.3681C7.60485 12.1411 7.02055 12.1494 6.50718 12.3432L7.83876 12.8938C8.67547 13.2425 9.07117 14.2033 8.72244 15.04C8.37442 15.877 7.41293 16.2727 6.57622 15.9237Z" fill="#F3F3F3" />
        <path d="M16.5578 7.78939C16.5578 6.33541 15.375 5.15234 13.9207 5.15234C12.4668 5.15234 11.2837 6.33541 11.2837 7.78939C11.2837 9.24361 12.4668 10.4262 13.9207 10.4262C15.375 10.426 16.5578 9.24338 16.5578 7.78939ZM11.9441 7.78489C11.9441 6.69078 12.8311 5.80401 13.9252 5.80401C15.0194 5.80401 15.9064 6.69078 15.9064 7.78489C15.9064 8.87899 15.0194 9.76576 13.9252 9.76576C12.8311 9.76576 11.9441 8.87875 11.9441 7.78489Z" fill="#F3F3F3" />
    </svg>
);

const ArrowLeft = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.71 15.88L10.83 12L14.71 8.11998C15.1 7.72998 15.1 7.09998 14.71 6.70998C14.32 6.31998 13.69 6.31998 13.3 6.70998L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" fill="#76808C" />
    </svg>
);

const ArrowRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.29 15.88L13.17 12L9.29 8.11998C8.9 7.72998 8.9 7.09998 9.29 6.70998C9.68 6.31998 10.31 6.31998 10.7 6.70998L15.29 11.3C15.68 11.69 15.68 12.32 15.29 12.71L10.7 17.3C10.31 17.69 9.68 17.69 9.29 17.3C8.91 16.91 8.9 16.27 9.29 15.88Z" fill="#76808C" />
    </svg>
);

const FriendsIcon = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3003_445)">
            <path d="M16.6666 11.4585C18.3958 11.4585 19.7812 10.0627 19.7812 8.3335C19.7812 6.60433 18.3958 5.2085 16.6666 5.2085C14.9375 5.2085 13.5416 6.60433 13.5416 8.3335C13.5416 10.0627 14.9375 11.4585 16.6666 11.4585ZM8.33329 11.4585C10.0625 11.4585 11.4479 10.0627 11.4479 8.3335C11.4479 6.60433 10.0625 5.2085 8.33329 5.2085C6.60413 5.2085 5.20829 6.60433 5.20829 8.3335C5.20829 10.0627 6.60413 11.4585 8.33329 11.4585ZM8.33329 13.5418C5.90621 13.5418 1.04163 14.7606 1.04163 17.1877V18.7502C1.04163 19.3231 1.51038 19.7918 2.08329 19.7918H14.5833C15.1562 19.7918 15.625 19.3231 15.625 18.7502V17.1877C15.625 14.7606 10.7604 13.5418 8.33329 13.5418ZM16.6666 13.5418C16.3645 13.5418 16.0208 13.5627 15.6562 13.5939C15.677 13.6043 15.6875 13.6252 15.6979 13.6356C16.8854 14.5002 17.7083 15.6564 17.7083 17.1877V18.7502C17.7083 19.1147 17.6354 19.4689 17.5208 19.7918H22.9166C23.4895 19.7918 23.9583 19.3231 23.9583 18.7502V17.1877C23.9583 14.7606 19.0937 13.5418 16.6666 13.5418Z" fill="#76808C" />
        </g>
        <defs>
            <clipPath id="clip0_3003_445">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const NotificationIcon = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3003_463)">
            <path d="M12.5 22.9165C13.6458 22.9165 14.5833 21.979 14.5833 20.8332H10.4167C10.4167 21.979 11.3437 22.9165 12.5 22.9165ZM18.75 16.6665V11.4582C18.75 8.26025 17.0417 5.58317 14.0625 4.87484V4.1665C14.0625 3.30192 13.3646 2.604 12.5 2.604C11.6354 2.604 10.9375 3.30192 10.9375 4.1665V4.87484C7.94791 5.58317 6.24999 8.24984 6.24999 11.4582V16.6665L4.90624 18.0103C4.24999 18.6665 4.70833 19.7915 5.63541 19.7915H19.3542C20.2812 19.7915 20.75 18.6665 20.0937 18.0103L18.75 16.6665Z" fill="#76808C" />
        </g>
        <defs>
            <clipPath id="clip0_3003_463">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const ViewDropdownIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.76668 7.7418L10 10.9751L13.2334 7.7418C13.5584 7.4168 14.0834 7.4168 14.4084 7.7418C14.7334 8.0668 14.7334 8.5918 14.4084 8.9168L10.5834 12.7418C10.2584 13.0668 9.73335 13.0668 9.40835 12.7418L5.58335 8.9168C5.25835 8.5918 5.25835 8.0668 5.58335 7.7418C5.90835 7.42513 6.44168 7.4168 6.76668 7.7418Z" fill="#76808C" />
    </svg>
);

const PrimaryHeader: React.FC = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goForward = () => navigate(1);

    return (
        <header className="primary-header">
            <div className="header-left">
                <button className="nav-arrow" onClick={goBack}><ArrowLeft /></button>
                <button className="nav-arrow" onClick={goForward}><ArrowRight /></button>
                <div className="brand">
                    <SteamIcon />
                    <span className="steam-text">Steam®</span>
                </div>
                <nav className="main-nav">
                    <NavLink to="/store" className={({ isActive }) => (isActive ? 'active' : '')}>Store</NavLink>
                    <NavLink to="/library" className={({ isActive }) => (isActive ? 'active' : '')}>Library</NavLink>
                    <NavLink to="/community" className={({ isActive }) => (isActive ? 'active' : '')}>Community</NavLink>
                    <NavLink to="/user" className={({ isActive }) => (isActive ? 'active' : '')}>User Page</NavLink>
                </nav>
            </div>
            <div className="header-right">
                <div className="friend-notif-group">
                    <button className="icon-button"><FriendsIcon /></button>
                    <button className="icon-button"><NotificationIcon /></button>
                </div>
                <AccountDropdown />
                <div className="help-view-group">
                    <span className="help-text">Help</span>
                    <div className="view-wrapper">
                        <span className="view-text">View</span>
                        <ViewDropdownIcon />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PrimaryHeader;