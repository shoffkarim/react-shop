import React from "react";
//function ProductItem({id, imageUrl, name, price, category, rating, reviews, information, mark})
function ProductItem({id, imageUrl, name, price, category, rating, reviews, information, mark}) {
  return (
    <div className="product-item">
      <div className="pi-pic">
        <div className="tag-sale">{mark}</div>
        <img src={imageUrl} alt="" />
        <div className="pi-links">
          <a href="fake" className="add-card">
            <i className="flaticon-bag"></i>
            <span>ADD TO CART</span>
          </a>
          <a href="fake" className="wishlist-btn">
            <i className="flaticon-heart"></i>
          </a>
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
