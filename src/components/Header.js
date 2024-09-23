import React from 'react';
import './Header.css';

// Header component for navigation and logo
const Header = () => {
    return (
        <header className="header">
            <div className="logo">Wefo</div>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <button className="start-project">Start a project</button>
            </nav>
        </header>
    );
};

export default Header;
