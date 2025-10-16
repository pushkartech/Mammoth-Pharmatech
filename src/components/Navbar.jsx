// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
const img1 = '/images/icon-red.png';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="mammoth-container">
          <img src={img1} className="logo-img" alt="Mammoth logo" />
          <div className="logo">MAMMOTH</div>
          <div className="pharmalogo">PHARMATECH</div>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          {/* link to section on homepage via hash */}
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/productsPage">Products</Link></li>
          <li><Link to="/#contact" className="nav-contact-btn">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
