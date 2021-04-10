import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CardTotal from "../CartTotal/CardTotal";

function CartTable() {
  const items = useSelector(({Cart}) => Cart.items);
  const totalPrice = useSelector(({Cart}) => Cart.totalPrice);
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
                <th className="size-th">Size</th>
                <th className="total-th">Price</th>
              </tr>
            </thead>
            <tbody>
              {items && items.map((obj, index) => <CartItem {...obj} key={index}/>)}
            </tbody>
          </table>
          <CardTotal totalPrice={totalPrice}/>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
