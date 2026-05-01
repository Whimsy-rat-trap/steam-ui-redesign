import React from 'react';

interface SortFilterProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

const SortFilter: React.FC<SortFilterProps> = ({ label, isSelected, onClick }) => {
    return (
        <button className={`sort-filter ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default SortFilter;