import React from "react";
import classNames from "classnames";
import { QuantityCounter } from "..";
import { AddToCart } from "../../redux/actions/Cart";
import { useSelector, useDispatch} from "react-redux";

const ItemDetails = React.memo(function({
  id,
  name,
  cartImgUrl,
  price,
  sizes,
  rating,
  reviews,
  blockInfo,
}) {
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const avaibleSizes = [32, 34, 36, 38, 40, 42];
  const onSelectSize = (number) => {
    setActiveSize(number);
  };

  const maxRating = 5;
  const ratingArray = [];
  for (let i = 0; i < maxRating; i++) {
    if (i < rating) {
      ratingArray.push(<i className="fa fa-star-o" key={i}></i>);
    } else {
      ratingArray.push(<i className="fa fa-star-o fa-fade" key={i}></i>);
    }
  }

  const [activeBlockInfo, setActiveBlockInfo] = React.useState(blockInfo[0].id);
  const onSetActiveBlock = (index) => {
    if(index === activeBlockInfo){
      setActiveBlockInfo(-1);
    } else {
      setActiveBlockInfo(index);
    }
  }
  let quantity = 1;
  const onChangeQuantity = (value) => {
    quantity = value
  }
  const dispatch = useDispatch();
  const addToCart = () => {
    const obj = {
      id,
      cartImgUrl,
      name,
      price,
      quantity,
      size: activeSize
    }
    dispatch(AddToCart(obj));
  }

  return (
    <div className="col-lg-6 product-details">
      <h2 className="p-title">{name}</h2>
      <h3 className="p-price">${price}</h3>
      <h4 className="p-stock">
        Available: <span>In Stock</span>
      </h4>
      <div className="p-rating">
        {rating && ratingArray.map((star) => star)}
      </div>
      <div className="p-review">
        <a href="fake">{reviews} reviews</a>|<a href="fake">Add your review</a>
      </div>
      <div className="fw-size-choose">
        <p>Size</p>
        {avaibleSizes &&
          avaibleSizes.map((number, index) => (
            <div
              className={classNames("sc-item", {
                disable: !sizes.includes(number),
                active: number === activeSize,
              })}
              onClick={() => onSelectSize(number)}
              key={index}
            >
              <input
                type="radio"
                name="sc"
                id={index}
                checked={index === activeSize ? false : true}
                readOnly={true}
              />
              <label htmlFor={index}>{number}</label>
            </div>
          ))}
      </div>
      <QuantityCounter text={"Quantity"} changeQuantity={(value) => onChangeQuantity(value)} defaultValue={quantity}/>
      <button onClick={addToCart} className="site-btn">
        ADD TO CART
      </button>
      {blockInfo && (
        <div id="accordion" className="accordion-area">
          {blockInfo.map((obj, index) => (
            <div className="panel" key={index}>
              <div className="panel-header">
                <button className={classNames("panel-link",{
                  active: index === activeBlockInfo
                })}
                  onClick={() => onSetActiveBlock(index)}
                >{obj.title}</button>
              </div>
              <div className={classNames("collapse",{
                show: index === activeBlockInfo
              })}>
                <div
                  className="panel-body"
                  dangerouslySetInnerHTML={{ __html: obj.text }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="social-sharing">
        <a href="fake">
          <i className="fa fa-google-plus"></i>
        </a>
        <a href="fake">
          <i className="fa fa-pinterest"></i>
        </a>
        <a href="fake">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="fake">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="fake">
          <i className="fa fa-youtube"></i>
        </a>
      </div>
    </div>
  );
})

export default ItemDetails;
