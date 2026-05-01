import React, { useState } from 'react';

const ToggleOn = () => (
    <svg width="63" height="30" viewBox="0 0 63 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="63" height="30" rx="15" fill="#212B45" />
        <rect x="38" y="5" width="20" height="20" rx="10" fill="#66C0F4" />
    </svg>
);

const ToggleOff = () => (
    <svg width="63" height="30" viewBox="0 0 63 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="63" height="30" rx="15" fill="#1E2329" />
        <rect x="5" y="5" width="20" height="20" rx="10" fill="#313843" />
    </svg>
);

interface ToggleProps {
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ defaultChecked = false, onChange }) => {
    const [checked, setChecked] = useState(defaultChecked);

    const handleClick = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        onChange?.(newChecked);
    };

    return <div className="toggle" onClick={handleClick}>{checked ? <ToggleOn /> : <ToggleOff />}</div>;
};

export default Toggle;