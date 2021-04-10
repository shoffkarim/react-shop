import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ id, imageUrl, name, price, mark }) {
  return (
    <div className="product-item">
      <div className="pi-pic">
        {mark !== "" && mark !== undefined && (
          <div className="tag-sale">{mark}</div>
        )}
        <img src={imageUrl} alt="" />
        <div className="pi-links">
          <Link to={`/item/${id}`} className="add-card">
            <i className="flaticon-bag"></i>
            <span>ADD TO CART</span>
          </Link>
          {/* <a href="fake" className="wishlist-btn">
            <i className="flaticon-heart"></i>
          </a> */}
        </div>
      </div>
      <div className="pi-text">
        <h6>${price}</h6>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default ProductItem;
