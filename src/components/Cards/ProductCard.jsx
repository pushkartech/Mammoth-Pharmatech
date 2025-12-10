import React from 'react';
import  '../../styles/ProductsSection.css';
import { Link } from 'react-router-dom';

export const ProductCard = ({index, icon, title, desc}) => {
  return (
    <div key={index} className="product-card">
        <div className="product-content">
            <div className="product-icon">
                <i className={icon}></i>
            </div>
            <h3 className="product-title">{title}</h3>
            <p className="product-desc">{desc}</p>
            <Link to="/productsPage" className="btn btn-secondary learn-more-btn">Learn More →</Link>
        </div>
    </div>
  )
}
