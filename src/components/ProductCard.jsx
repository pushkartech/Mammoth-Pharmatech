import React from "react";
import '../styles/ProductCard.css';
import { useNavigate } from "react-router-dom";

function ProductCard({title,description,img1,section,productId,completeDetails}){
    const navigate = useNavigate();
    const handleProductDetailRouting = ()=>{
        navigate(`/products/${section}/${productId}`,{
            state: {completeDetails,title,description}
        })
    }
    return (
        <div class="product-page-card">
            <div class="product-page-content">
                <img src={img1}></img>
                <h3>{title}</h3>
                <p>{description}</p>
                {/* <ul class="product-page-features">
                    <li>Interlocking door systems</li>
                    <li>UV sterilization options</li>
                    <li>Multiple size configurations</li>
                </ul> */}
                <button onClick={handleProductDetailRouting} class="view-details-btn">Learn More</button>
            </div>
        </div>
    )
}

export default ProductCard;

/**
 * 
 * I am routing from ProductCard to ProductDetail
 * Product details should have detail of that specific product
 * ProductPageSection has all the details coming from Products page
 * In the PRoducts page only, we need to add complete description
 * so we have to define the state in the ProductPage
 * 
 * state will contain
 * --> Image of the product
 * --> Title is already there
 * --> description (if new description is required)
 * --> a list of key features
 * --> placementInfo
 * --> a list of Available types
 * --> To be added later on (Request Quote and download specs)
 */