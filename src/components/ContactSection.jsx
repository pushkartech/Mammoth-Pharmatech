import React from "react";
import '../styles/ContactSection.css';
function ContactSection() {
            return (
                <section id="contact" className="section contact">
                    <div className="container">
                        <h2 className="section-title contact-title">Let's Connect!</h2>
                        <div className="contact-container">
                            <form className="contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Your Phone" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" required>
                                        <option value="">Area of Interest</option>
                                        <option>Cleanroom Infrastructure</option>
                                        <option>Process Machinery</option>
                                        <option>Sterile Line Solutions</option>
                                        <option>Utility & HVAC Solutions</option>
                                        <option>Packaging Solutions</option>
                                        <option>Laboratory Equipment</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-secondary" style={{color: '#d70000', backgroundColor: 'white'}}>
                                    Send Message
                                </button>
                            </form>
                            <div className="contact-info">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <p>123 Pharma Tech Avenue, Industrial Zone, Mumbai, India</p>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <p>+91 98765 43210</p>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <p>info@mammothpharmatech.com</p>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                </div>
                                <div className="social-icons">
                                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
export default ContactSection;        