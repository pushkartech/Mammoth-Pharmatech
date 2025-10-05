import React from "react";
import '../styles/AboutSection.css';
function AboutSection() {
            return (
                <section id="about" className="section">
                    <div className="container">
                        <h2 className="section-title">About Mammoth Pharmatech</h2>
                        
                        <p className="section-subtitle">Bridging the Gap in Pharmaceutical Solutions</p>
                        <div className="about-content">
                            <div className="about-text">
                                <p>
                                    Founded in 2020-21, Mammoth Pharmatech has rapidly established itself as a trusted partner in the pharmaceutical industry, 
                                    offering comprehensive solutions that bridge the gap between technical requirements and commercial viability. Our expertise 
                                    spans across pharmaceutical manufacturing, healthcare, and cosmetic production, with strategic partnerships with global leaders.
                                </p>
                            </div>
                            <div className="about-features">
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <i className="fas fa-industry"></i>
                                    </div>
                                    <h3 className="feature-title">Industry Focus</h3>
                                    <p>Specialized solutions for pharmaceutical manufacturing, healthcare, and cosmetic production.</p>
                                </div>
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <h3 className="feature-title">Global Perspective</h3>
                                    <p>Strategic partnerships with Delta 2000 and PBL (Italy) to deliver world-class solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }

export default AboutSection;