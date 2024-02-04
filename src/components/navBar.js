import React, { useState } from 'react';
import "../styles/navBar.css";
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
    const [expandNavbarMenu, setExpandNavbarMenu] = useState(false);

    const handleLinkClick = () => {
        setExpandNavbarMenu(false);
    };

    return (
        <div className="header">
            <nav>
                <Link to="/" onClick={handleLinkClick}>Accueil</Link>
                <Link to="/competences" onClick={handleLinkClick}>compétences</Link>
                <Link to="/projets" onClick={handleLinkClick}>Projets</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                <div className="animation start-home"></div>
            </nav>
        </div>
    );
}

export default NavbarMenu;
