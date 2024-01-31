import React from 'react';
import { NavLink } from 'react-router-dom';
// Убедитесь, что пути к стилям указаны верно
import './css/style.css'; 

function Header() {
    return (
        <header>
            <div className="logo"></div>
            <ul className="navigation">
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
                <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink></li>
                <li><NavLink to="/testimony" className={({ isActive }) => isActive ? "active" : ""}>Testimony</NavLink></li>
                <li><NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>News</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;
