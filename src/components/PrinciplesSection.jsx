import React from "react";
import '../styles/PrinciplesSection.css';
function PrinciplesSection() {
            const principles = [
                {
                    icon: 'fas fa-lightbulb',
                    title: 'Innovation',
                    desc: 'Continuously developing cutting-edge solutions for the pharmaceutical industry.'
                },
                {
                    icon: 'fas fa-shield-alt',
                    title: 'Reliability',
                    desc: 'Delivering dependable products and services that meet the highest standards.'
                },
                {
                    icon: 'fas fa-users',
                    title: 'Customer-Centric',
                    desc: 'Putting our clients at the center of everything we do.'
                },
                {
                    icon: 'fas fa-globe-americas',
                    title: 'Global Perspective',
                    desc: 'Combining international expertise with local market understanding.'
                }
            ];

            return (
                <section id="principles" className="section">
                    <div className="container">
                        <h2 className="section-title">Our Principles</h2>
                        <div className="principles-container">
                            {principles.map((principle, index) => (
                                <div key={index} className="principle-card">
                                    <div className="principle-icon">
                                        <i className={principle.icon}></i>
                                    </div>
                                    <h3 className="principle-title">{principle.title}</h3>
                                    <p>{principle.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        }
export default PrinciplesSection;        