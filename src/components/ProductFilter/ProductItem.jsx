import React from "react";
import {useDispatch} from "react-redux";
import {setProductItems} from "../../redux/actions/ProductItems"

const obj = [{
  id: 0,
  imageUrl: "/img/product/2.jpg",
  name: "Flamboyant Pink Top",
  price: "35.00",
  sizes: [32, 36, 38, 42],
  category: 0,
  rating: 4,
  reviews: 3,
  information:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p><br><p>Approx length 66cm/26 (Based on a UK size 8 sample)</p>",
  mark: "on sale",
}];

function ProductItem({id, imageUrl, name, price, mark}) {
  console.log(mark)
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="product-item">
        <div className="pi-pic">
          {mark !== "" && mark !== undefined &&
            <div className="tag-sale">{mark}</div>
          }
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
    </div>
  );
}

export default ProductItem;
