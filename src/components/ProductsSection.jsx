import React from "react";
import '../styles/ProductsSection.css';
import { ProductCard } from "./Cards/ProductCard";

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
                            {products.map((product, idx) => (
                                <ProductCard index={idx} icon={product.icon} title={product.title} desc={product.desc} />
                            ))}
                        </div>
                    </div>
                </section>
            );
        }
export default ProductsSection;