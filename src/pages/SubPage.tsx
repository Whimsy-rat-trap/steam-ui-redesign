import React from 'react';

const SubPage: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="page-container">
            <h1 className="page-title">{title}</h1>
            <p className="body-large">This is a dummy subpage. Content coming soon.</p>
        </div>
    );
};

export default SubPage;