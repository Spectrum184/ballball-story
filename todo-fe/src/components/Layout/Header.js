import "./styles.css";
import React from "react";

const Header = () => {
    return (
        <nav className="navbar">
            <h1>BallBall</h1>
            <div className="">
                <input placeholder="Tìm kiếm todo..." className="search-todo" />
            </div>
            <button className="btn-logout">Đăng xuất</button>
        </nav>
    );
};

export default Header;
