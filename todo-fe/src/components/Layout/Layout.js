import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <SideBar />
            <Footer />
        </div>
    );
};

export default Layout;
