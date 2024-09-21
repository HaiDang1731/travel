import React from 'react';
import Navbar from '../components/navBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
const MainLayout = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export default MainLayout;
