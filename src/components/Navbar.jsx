import React from "react";
import '../styles/Navbar.css';
const img1= '/images/icon-red.png';


function Navbar() {
            const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

            

            return (
                <nav className="navbar">
                    <div className="container navbar-container">
                    <div className="mammoth-container">
                    <img src={img1} className="logo-img"/>
                        <div href="#" className="logo">MAMMOTH</div>
                        <div className="pharmalogo" href="#">PHARMATECH</div>
                    </div>
                        <button 
                            className="mobile-menu-btn" 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <i className="fas fa-bars"></i>
                        </button>
                        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/productsPage">Products</a></li>
                            {/* <li><a href="/">Principles</a></li> */}
                            <li><a href="/" className="nav-contact-btn">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
            );
}

export default Navbar;