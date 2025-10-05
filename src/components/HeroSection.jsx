import React from "react";
import '../styles/HeroSection.css';
import img1 from '../images/modular-cleanroom.webp';
import img2 from '../images/modular-cleanroom.webp';
import img3 from '../images/modular-cleanroom.webp';

function HeroSection() {
            return (
                <section id="home" className="hero">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">Innovating Pharmaceutical Solutions Since 2021</h1>
                            <p className="hero-subtitle">
                                Delivering solutions that meet both technical and commercial expectations in pharmaceutical, healthcare, and cosmetics industries.
                            </p>
                            <div className="hero-buttons">
                                <a href="#contact" className="btn btn-primary">Contact Us</a>
                                <a href="#about" className="btn btn-secondary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container image-container">
                <div className="hero-images">
                    <img src={img1} alt="Tech 1" className="hero-img top-left" />
                    <img src={img2} alt="Tech 2" className="hero-img center" />
                    <img src={img3} alt="Tech 3" className="hero-img bottom-right" />
                </div>
            </div> */}
                </section>
            );
        }
export default HeroSection;