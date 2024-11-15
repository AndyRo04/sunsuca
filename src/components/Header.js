import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/sunsuca.png'; // Importa la imagen

function Header() {
  return (
    <header>
      <img src={logo} alt="SUNSUCA Logo" className="header-logo" /> {/* Muestra la imagen */}
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/gallery">Galería</Link>
        <Link to="/about-us">Nosotros</Link>
        <Link to="/login">Acceso Clientes</Link>
      </nav>
    </header>
  );
}

export default Header;
