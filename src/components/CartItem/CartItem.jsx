import React from "react";
import { QuantityCounter } from "..";

function CartItem({id, cartImgUrl, name, price, quantity, size}) {

  const onChangeQuantity = (value) => {
    console.log(value)
  }
  return (
    <tr>
      <td className="product-col">
        <img src={cartImgUrl} alt="" />
        <div className="pc-title">
          <h4>{name}</h4>
          <p>${price}</p>
        </div>
      </td>
      <td className="quy-col">
        <QuantityCounter defaultValue={quantity} changeQuantity={(value) => onChangeQuantity(value)}/>
      </td>
      <td className="size-col">
        <h4>Size {size}</h4>
      </td>
      <td className="total-col">
        <h4>$45.90</h4>
      </td>
    </tr>
  );
}

export default CartItem;
