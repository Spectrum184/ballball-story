import "./styles.css";
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="main-wrapper">{children}</div>
        </div>
    );
};

export default Layout;
