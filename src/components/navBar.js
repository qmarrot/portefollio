import React, { useState } from 'react';
import "../styles/navBar.css";
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
    const [expandNavbarMenu, setExpandNavbarMenu] = useState(false);

    const handleLinkClick = () => {
        setExpandNavbarMenu(false);
    };

    return (
        <div>
            <nav>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/competences" onClick={handleLinkClick}>competence</Link>
                <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                <div className="animation start-home"></div>
            </nav>
        </div>
    );
}

export default NavbarMenu;
