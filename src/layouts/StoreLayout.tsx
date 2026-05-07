import React from 'react';
import { Outlet } from 'react-router-dom';
import StoreSecondaryHeader from '../components/StoreSecondaryHeader';

const StoreLayout: React.FC = () => {
    return (
        <>
            <StoreSecondaryHeader />
            <Outlet />
        </>
    );
};
export default StoreLayout;