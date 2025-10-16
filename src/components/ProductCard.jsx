import React from "react";
import "../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ title, description, img1, section, productId, completeDetails }) {
  const navigate = useNavigate();

  const handleProductDetailRouting = () => {
    window.scrollTo(0, 0);
    navigate(`/products/${section}/${productId}`, {
      state: { completeDetails, title, description },
    });
  };

  return (
    <div className="product-page-card">
      <div className="product-page-content">
        <img src={img1} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {/* ✅ Button fixed at bottom */}
      <div className="product-card-footer">
        <button onClick={handleProductDetailRouting} className="view-details-btn">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
