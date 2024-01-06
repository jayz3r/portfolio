import React from "react";
import "./style/products.css";

export function Products(props) {
  return (
    <div className="productList">
        <div key={props.id} className="productCard">
          <img
            src={props.image}
            alt="product-img"
            className="productImage"
          ></img>
        </div>
    </div>
  );
}
