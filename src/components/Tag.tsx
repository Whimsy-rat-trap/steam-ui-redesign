import React from 'react';

type TagVariant = 'checked' | 'unchecked' | 'current' | 'filtered-tag' | 'default-tag';

interface TagProps {
    label: string;
    variant: TagVariant;
    onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({ label, variant, onClick }) => {
    return (
        <button className={`tag ${variant}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Tag;