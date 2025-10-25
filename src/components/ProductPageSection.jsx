import React, { useRef, useEffect } from "react";
import ProductList from "./ProductList";
import "../styles/ProductPageSection.css";

function ProductPageSection({ index, title, description, products = [], isOpen, onToggle }) {
  const sectionRef = useRef(null);

  // Scroll to section top after opening (after CSS transition)
  useEffect(() => {
    if (isOpen && sectionRef.current) {
      // Wait for expand animation (~350ms)
      const timeout = setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400); // matches .section-panel transition duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <section ref={sectionRef} className="product-page-section">
      <header className="section-header">
        <div>
          <h2 id={`section-${index}`}>{title}</h2>
        </div>
        <div className="section-actions">
          <button
            className={`toggle-btn ${isOpen ? "open" : ""}`}
            onClick={(e) => {
              e.currentTarget.blur(); // ✅ prevent focus scroll jump
              onToggle();
            }}
            aria-expanded={isOpen}
            aria-controls={`section-panel-${index}`}
            title={isOpen ? "Collapse products" : "Expand products"}
          >
            <span className="toggle-text">{isOpen ? "Hide" : "Show Products"}</span>
            <span className="chev" aria-hidden="true">
              ▾
            </span>
          </button>
        </div>
      </header>

      <p>{description}</p>

      <div
        id={`section-panel-${index}`}
        className={`section-panel ${isOpen ? "expanded" : "collapsed"}`}
        role="region"
        aria-labelledby={`section-${index}`}
      >
        {products.length === 0 ? (
          <div className="no-products">No products available.</div>
        ) : (
          <ProductList products={products} sectionName={title} />
        )}
      </div>
    </section>
  );
}

export default ProductPageSection;
