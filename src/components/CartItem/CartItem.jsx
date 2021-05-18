import React from "react";

function CartItem({id, cartImgUrl, name, price, quantity, size}) {
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
        {quantity}
      </td>
      <td className="size-col">
        <h4>Size {size}</h4>
      </td>
      <td className="total-col">
        <h4>${quantity * price}</h4>
      </td>
    </tr>
  );
}

export default CartItem;
