import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart, faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="product-image" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
    
        <p>
          <small>By: {seller}</small>
        </p>
        
        <p>${price}</p>

        <p>
          <small>Only {stock} left in stock - Order Soon</small>
        </p>
        <button onClick={() => props.handleProduct(props.product)}><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
