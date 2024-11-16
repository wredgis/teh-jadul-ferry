import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo à gauche avec margin-end */}
          <div className="logo-style me-auto">
            <Link className="navbar-brand" to="/">
              <img
                src="/pics/logo.png"
                alt="Logo"
                width="70"
                height="70"
                className="d-inline-block align-top"
              />
            </Link>
            <p>Ferry Alvianto</p>
          </div>

          {/* Bouton pour mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens de navigation alignés à droite */}
          <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Beranda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/produk">Produk</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tentangkami">Tentang Kami</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kontak">Kontak</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/franchise">Franchise</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="banniere">
       <img src="/pics/banniere1.jpg" alt="banniere teh" />
      </div>
    </header>
  );
};

export default Header;

