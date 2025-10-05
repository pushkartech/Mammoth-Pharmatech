import React from "react";
import ProductCard from "./ProductCard";
import '../styles/ProductList.css';

function ProductList({products,sectionName}){
    
    return (
        <div class="product-grid">
        {
            products.map((product,index)=>{
                return <ProductCard title={product.title} description={product.description} img1={product.img1} section={sectionName} productId={index+1} completeDetails={product.completeDetails}/>
            })
        }
        </div>
    )
}

export default ProductList;