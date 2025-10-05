import React from "react";
import ProductList from "./ProductList";
import '../styles/ProductPageSection.css';

function ProductPageSection({index, title,description,products =[], isOpen, onToggle}){
    return (
        <section class="product-page-section">
            <header className="section-header"> 
            <div>
                <h2>{title}</h2>
            </div>
            <div className="section-actions">
                <button
                    className={`toggle-btn ${isOpen ? 'open' : ''}`}
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={`section-panel-${index}`}
                    title={isOpen ? 'Collapse products' : 'Expand products'}
                >
                    <span className="toggle-text">{isOpen ? 'Hide' : 'Show Products'}</span>
                    <span className="chev" aria-hidden="true">▾</span>
                </button>
            </div>
            </header>
            
            <p>{description}</p>

      <div
        id={`section-panel-${index}`}
        className={`section-panel ${isOpen ? 'expanded' : 'collapsed'}`}
        role="region"
        aria-labelledby={`section-${index}`}
      >
        <div>
          {products.length === 0 ? (
            <div className="no-products">No products available.</div>
          ) : (
            
            <ProductList products={products} sectionName={title}/>
          )}
        </div>
      </div>
        </section>
        
    );
}

export default ProductPageSection;