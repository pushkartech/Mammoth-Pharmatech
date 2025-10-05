import React from "react";
import '../styles/ProductDetails.css';
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const goBack = () => window.history.back();
  const location = useLocation();
  const completeDetails = location.state?.completeDetails;
  const title = location.state?.title;
  const description = location.state?.description;
  console.log("complete details are "+JSON.stringify(completeDetails.availableTypes));
  return (
    <div className="container">
      <a href="#" className="back-btn" onClick={(e) => { e.preventDefault(); goBack(); }}>
        <i>←</i> Back to Products
      </a>

      <div className="product-container">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${completeDetails.image})` }}
        ></div>

        <div className="product-info">
          <h1 className="product-title">{title}</h1>

          <p className="product-description">
            {description}
          </p>

          <h2 className="section-title">Key Features</h2>
          <ul className="features-list">
            {
                completeDetails.keyFeatures?.map((feature)=>{
                    return <ul>{feature}</ul>
                })
            }
          </ul>

          {/* <div className="placement-info">
            <h2 className="section-title">Recommended Placement</h2>
            <p>
              {completeDetails.placementInfo}
            </p>
          </div> */}

          {/* <div className="types-info">
            <h2 className="section-title">Available Types</h2>
            <div className="types-list">
            {
                completeDetails?.availableTypes?.map((type)=>{
                    return <span className="type-pill">{type}</span>
                })
            }
            </div>
          </div>

          <div className="cta-container">
            <button className="cta-btn primary-btn" onClick={() => alert('Quote request form would appear here')}>
              Request Quote
            </button>
            <button className="cta-btn secondary-btn" onClick={() => alert('Initiating download of product specifications PDF')}>
              Download Specs
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
