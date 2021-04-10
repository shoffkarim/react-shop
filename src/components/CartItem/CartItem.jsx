import React from "react";
import { QuantityCounter } from "..";

function CartItem() {
  return (
    <tr>
      <td className="product-col">
        <img src="img/cart/1.jpg" alt="" />
        <div className="pc-title">
          <h4>Animal Print Dress</h4>
          <p>$45.90</p>
        </div>
      </td>
      <td className="quy-col">
        <QuantityCounter />
      </td>
      <td className="size-col">
        <h4>Size M</h4>
      </td>
      <td className="total-col">
        <h4>$45.90</h4>
      </td>
    </tr>
  );
}

export default CartItem;
