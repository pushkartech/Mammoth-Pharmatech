import React from "react";
import "../styles/ProductDetails.css";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const completeDetails = location.state?.completeDetails || {};
  const { image, keyFeatures = [], placementInfo, availableTypes = [] } = completeDetails;
  const title = location.state?.title || "Product Details";
  const description = location.state?.description || "";

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="product-details-container">
      <a href="#" className="back-btn" onClick={goBack}>
        <i>←</i> Back to Products
      </a>

      <div className="product-container">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="product-info">
          <h1 className="product-title">{title}</h1>

          <p className="product-description">{description}</p>

          {/* ✅ Key Features */}
          {keyFeatures.length > 0 && (
            <>
              <h2 className="section-title">Key Features</h2>
              <ul className="features-list">
                {keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {/* ✅ Optional Placement Info */}
          {/* {placementInfo && (
            <div className="placement-info">
              <h2 className="section-title">Recommended Placement</h2>
              <p>{placementInfo}</p>
            </div>
          )} */}

          {/* ✅ Optional Available Types */}
          {/* {availableTypes.length > 0 && (
            <div className="types-info">
              <h2 className="section-title">Available Types</h2>
              <div className="types-list">
                {availableTypes.map((type, index) => (
                  <span key={index} className="type-pill">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )} */}

          {/* ✅ CTA Buttons */}
          {/* <div className="cta-container">
            <button
              className="cta-btn primary-btn"
              onClick={() => alert("Quote request form will appear here.")}
            >
              Request Quote
            </button>
            <button
              className="cta-btn secondary-btn"
              onClick={() => alert("Product specification download will start.")}
            >
              Download Specs
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
