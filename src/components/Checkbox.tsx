import React, { useState } from 'react';

const CheckboxUnchecked = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_757_10004)">
            <path d="M22.5 23.75H7.5C6.8125 23.75 6.25 23.1875 6.25 22.5V7.5C6.25 6.8125 6.8125 6.25 7.5 6.25H22.5C23.1875 6.25 23.75 6.8125 23.75 7.5V22.5C23.75 23.1875 23.1875 23.75 22.5 23.75ZM23.75 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75Z" fill="#313843" />
        </g>
        <defs>
            <clipPath id="clip0_757_10004">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const CheckboxHover = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_757_10006)">
            <path d="M22.5 23.75H7.5C6.8125 23.75 6.25 23.1875 6.25 22.5V7.5C6.25 6.8125 6.8125 6.25 7.5 6.25H22.5C23.1875 6.25 23.75 6.8125 23.75 7.5V22.5C23.75 23.1875 23.1875 23.75 22.5 23.75ZM23.75 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75Z" fill="#76808C" />
        </g>
        <defs>
            <clipPath id="clip0_757_10006">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const CheckboxChecked = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_757_10009)">
            <path d="M23.75 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75ZM13.3875 20.3625C12.9 20.85 12.1125 20.85 11.625 20.3625L7.1375 15.875C6.65 15.3875 6.65 14.6 7.1375 14.1125C7.625 13.625 8.4125 13.625 8.9 14.1125L12.5 17.7125L21.1 9.1125C21.5875 8.625 22.375 8.625 22.8625 9.1125C23.35 9.6 23.35 10.3875 22.8625 10.875L13.3875 20.3625Z" fill="#76808C" />
        </g>
        <defs>
            <clipPath id="clip0_757_10009">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

interface CheckboxProps {
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ defaultChecked = false, onChange }) => {
    const [checked, setChecked] = useState(defaultChecked);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        onChange?.(newChecked);
    };

    let IconComponent = CheckboxUnchecked;
    if (checked) {
        IconComponent = CheckboxChecked;
    } else if (isHovered) {
        IconComponent = CheckboxHover;
    }

    return (
        <div
            className="checkbox"
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <IconComponent />
        </div>
    );
};

export default Checkbox;