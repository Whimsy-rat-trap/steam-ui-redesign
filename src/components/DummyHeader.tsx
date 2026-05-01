import React from 'react';
import { NavLink } from 'react-router-dom';

const DummyHeader: React.FC = () => {
    return (
        <header className="dummy-header">
            <NavLink to="/store" className={({ isActive }) => (isActive ? 'active' : '')}>
                Store
            </NavLink>
            <NavLink to="/library" className={({ isActive }) => (isActive ? 'active' : '')}>
                Library
            </NavLink>
            <NavLink to="/community" className={({ isActive }) => (isActive ? 'active' : '')}>
                Community
            </NavLink>
            <NavLink to="/user" className={({ isActive }) => (isActive ? 'active' : '')}>
                User Page
            </NavLink>
        </header>
    );
};

export default DummyHeader;