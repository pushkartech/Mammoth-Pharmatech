// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const img1 = "/images/icon-red.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Left: Logo (Full desktop version preserved) */}
        <Link to="/" className="nav-logo">
          <div className="mammoth-container">
            <img src={img1} className="logo-img" alt="Mammoth logo" />
            <div className="logo-text">
              <div className="logo">MAMMOTH</div>
              <div className="pharmalogo">PHARMATECH</div>
            </div>
          </div>
        </Link>

        {/* Right: Contact + Burger (mobile) */}
        <div className="mobile-right">
          <Link to="/#contact" className="nav-contact-btn mobile-contact-btn">
            Contact
          </Link>

          {/* Animated burger/cross */}
          <button
            className={`burger ${mobileMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/productsPage" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/#principles" onClick={closeMenu}>Principles</Link></li>
          <li className="desktop-contact">
            <Link to="/#contact" className="nav-contact-btn" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
