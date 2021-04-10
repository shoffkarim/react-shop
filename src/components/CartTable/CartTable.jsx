import React from "react";
import CartItem from "../CartItem/CartItem";
import CardTotal from "../CartTotal/CardTotal";

function CartTable() {
  return (
    <div className="col-lg-8">
      <div className="cart-table">
        <h3>Your Cart</h3>
        <div className="cart-table-warp">
          <table>
            <thead>
              <tr>
                <th className="product-th">Product</th>
                <th className="quy-th">Quantity</th>
                <th className="size-th">SizeSize</th>
                <th className="total-th">Price</th>
              </tr>
            </thead>
            <tbody>
              <CartItem/>
            </tbody>
          </table>
          <CardTotal/>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
