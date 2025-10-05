import React from "react";
import '../styles/PartnersSection.css';

function PartnersSection() {
            return (
                <section className="section" style={{backgroundColor: '#f9f9f9'}}>
                    <div className="container">
                        <h2 className="section-title">Our Global Partnerships</h2>
                        <div className="partners-container">
                            <img 
                                src="https://via.placeholder.com/300x150?text=Delta+2000" 
                                alt="Delta 2000" 
                                className="partner-logo" 
                            />
                            <img 
                                src="https://via.placeholder.com/300x150?text=PBL+Italy" 
                                alt="PBL Italy" 
                                className="partner-logo" 
                            />
                        </div>
                    </div>
                </section>
            );
        }
export default PartnersSection;