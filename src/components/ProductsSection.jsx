import React from "react";
import '../styles/ProductsSection.css';
function ProductsSection() {
            const products = [
                {
                    icon: 'fas fa-procedures',
                    title: 'Cleanroom Infrastructure',
                    desc: 'State-of-the-art cleanroom solutions for pharmaceutical manufacturing.'
                },
                {
                    icon: 'fas fa-cogs',
                    title: 'Process Machinery',
                    desc: 'High-quality machinery for pharmaceutical production processes.'
                },
                {
                    icon: 'fas fa-vial',
                    title: 'Sterile Line Solutions',
                    desc: 'Complete sterile line solutions for critical pharmaceutical applications.'
                },
                {
                    icon: 'fas fa-fan',
                    title: 'Utility & HVAC Solutions',
                    desc: 'Specialized HVAC systems designed for pharmaceutical facilities.'
                },
                {
                    icon: 'fas fa-box-open',
                    title: 'Packaging Solutions',
                    desc: 'Innovative packaging solutions for pharmaceutical products.'
                },
                {
                    icon: 'fas fa-flask',
                    title: 'Laboratory Equipment',
                    desc: 'Comprehensive range of laboratory equipment for research and quality control.'
                }
            ];

            return (
                <section id="products" className="section">
                    <div className="container">
                        <h2 className="section-title">Our Product Offerings</h2>
                        <div className="products-grid">
                            {products.map((product, index) => (
                                <div key={index} className="product-card">
                                    <div className="product-content">
                                        <div className="product-icon">
                                            <i className={product.icon}></i>
                                        </div>
                                        <h3 className="product-title">{product.title}</h3>
                                        <p className="product-desc">{product.desc}</p>
                                        <a href="/productsPage" className="btn btn-secondary">Learn More →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        }
export default ProductsSection