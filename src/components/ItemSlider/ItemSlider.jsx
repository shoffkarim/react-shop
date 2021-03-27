import React from "react";

function ItemSlider() {
  return (
    <div className="col-lg-6">
      <div className="product-pic-zoom">
        <img
          className="product-big-img"
          src="img/single-product/1.jpg"
          alt=""
        />
      </div>
      <div className="product-thumbs product-thumbs-style" tabindex="1">
        <div className="product-thumbs-track">
          <div className="pt active" data-imgbigurl="img/single-product/1.jpg">
            <img src="img/single-product/thumb-1.jpg" alt="" />
          </div>
          <div className="pt" data-imgbigurl="img/single-product/2.jpg">
            <img src="img/single-product/thumb-2.jpg" alt="" />
          </div>
          <div className="pt" data-imgbigurl="img/single-product/3.jpg">
            <img src="img/single-product/thumb-3.jpg" alt="" />
          </div>
          <div className="pt" data-imgbigurl="img/single-product/4.jpg">
            <img src="img/single-product/thumb-4.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemSlider;
