import React from 'react';
import { Outlet } from 'react-router-dom';
import CommunitySecondaryHeader from '../components/CommunitySecondaryHeader';

const CommunityLayout: React.FC = () => {
    return (
        <>
            <CommunitySecondaryHeader />
            <Outlet />
        </>
    );
};
export default CommunityLayout;