import React from "react";
import '../styles/Footer.css';
function Footer() {
            return (
                <footer className="footer">
                    <div className="container">
                        <div className="footer-container">
                            <div className="footer-column">
                                <a href="#" className="footer-logo">Mammoth Pharmatech</a>
                                <p className="footer-desc">
                                    A trusted partner in the pharmaceutical industry, offering comprehensive solutions that bridge the gap between 
                                    technical requirements and commercial viability.
                                </p>
                            </div>
                            <div className="footer-column">
                                <h3>Quick Links</h3>
                                <ul className="footer-links">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#products">Products</a></li>
                                    <li><a href="#principles">Principles</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h3>Contact Info</h3>
                                <div className="footer-contact-item">
                                    <i className="fas fa-phone footer-contact-icon"></i>
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="footer-contact-item">
                                    <i className="fas fa-envelope footer-contact-icon"></i>
                                    <span>info@mammothpharmatech.com</span>
                                </div>
                                <div className="footer-contact-item">
                                    <i className="fas fa-map-marker-alt footer-contact-icon"></i>
                                    <span>123 Pharma Tech Avenue, Mumbai, India</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>&copy; 2025 Mammoth Pharmatech. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            );
        }
export default Footer;