import React from 'react';
import { Outlet } from 'react-router-dom';
import LibrarySecondaryHeader from '../components/LibrarySecondaryHeader';

const LibraryLayout: React.FC = () => {
    return (
        <>
            <LibrarySecondaryHeader />
            <Outlet />
        </>
    );
};
export default LibraryLayout;