import React from "react";
import "./ProductCard.css";

export default function ProductCard({ item }) {
  return (
    <div>
      <div className="flipcart-product-wrapper">
        <img className="flipcart-product-img" src={item.image} alt="item" />

        <div className="flipcart-product-bottom">
          <p className="flipcart-product-name">{item.companyName}</p>
          <p className="flipcart-product-desc">{item.design}</p>
          <p className="flipcart-product-desc">
            Offer Price <small>₹ {item.price}</small>
          </p>
          <p className="flipcart-product-size">Size {item.size}</p>
        </div>
      </div>
    </div>
  );
}
