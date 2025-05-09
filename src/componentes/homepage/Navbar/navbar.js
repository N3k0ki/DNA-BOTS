import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./navbar.css"


function NavBar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (path) => {
        if (path && typeof path === 'string') {
          navigate(path);
        } else {
          console.error("Caminho de navegação inválido:", path);
        }
        setIsMenuOpen(false);
      };
    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? '✕' : '☰'}
            </button>
            <ul className={isMenuOpen ? 'open' : ''}>
                <li onClick={() => handleNavClick('/')}>Sobre</li>
                <li onClick={() => handleNavClick('/patrocinador')}>Seja Patrocinador</li>
                <li onClick={() => handleNavClick('/temporadas')}>Temporadas</li>
                <li onClick={() => handleNavClick('/competidores')}>Competidores</li>
            </ul>
        </nav>
    )
};

export default NavBar;
