import React from "react";
import CartTable from "../components/CartTable/CartTable";

function Cart() {
  return (
    <section className="cart-section spad">
      <div className="container">
        <div className="row">
          <CartTable/>
          <div className="col-lg-4 card-right">
            <form className="promo-code-form">
              <input type="text" placeholder="Enter promo code" />
              <button>Submit</button>
            </form>
            <a href="fake" className="site-btn">
              Proceed to checkout
            </a>
            <a href="fake" className="site-btn sb-dark">
              Continue shopping
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
