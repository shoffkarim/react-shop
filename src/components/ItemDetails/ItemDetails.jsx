import React from "react";
import classNames from "classnames";

function ItemDetails({name, price, sizes, rating, reviews, information, careDetails, shippingReturns}) {
  const avaibleSizes = [32, 34, 36, 38, 40, 42];
  const maxRating = 5;
  const ratingArray = [];
  for(let i = 0; i < maxRating; i++){
    if( i < rating){
      ratingArray.push(<i className="fa fa-star-o"></i>);
    } else {
      ratingArray.push(<i className="fa fa-star-o fa-fade"></i>);
    }
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
          avaibleSizes.map((number, index) =>
            (
              <div className={classNames("sc-item", {
                disable: !sizes.includes(number),
              })}>
                <input type="radio" name="sc" id={index} />
                <label for="xs-size">{number}</label>
              </div>
            )
          )
        }
      </div>
      <div className="quantity">
        <p>Quantity</p>
        <div className="pro-qty">
          <input type="text" value="1" />
        </div>
      </div>
      <a href="fake" className="site-btn">
        SHOP NOW
      </a>
      <div id="accordion" className="accordion-area">
        <div className="panel">
          <div className="panel-header" id="headingOne">
            <button
              className="panel-link active"
              data-toggle="collapse"
              data-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse1"
            >
              information
            </button>
          </div>
          <div
            id="collapse1"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="panel-body" dangerouslySetInnerHTML={{__html: information}}>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header" id="headingTwo">
            <button
              className="panel-link"
              data-toggle="collapse"
              data-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              care details{" "}
            </button>
          </div>
          <div
            id="collapse2"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="panel-body">
              <img src="./img/cards.png" alt="" />
              <div dangerouslySetInnerHTML={{__html: careDetails}}>
              </div>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header" id="headingThree">
            <button
              className="panel-link"
              data-toggle="collapse"
              data-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapse3"
            >
              shipping & Returns
            </button>
          </div>
          <div
            id="collapse3"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="panel-body" dangerouslySetInnerHTML={{__html: shippingReturns}}>
            </div>
          </div>
        </div>
      </div>
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
}

export default ItemDetails;
