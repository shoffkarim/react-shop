import React from "react";
import { useSelector, useDispatch} from "react-redux";
//import { AddToCart } from "../../redux/actions/Cart";
import { QuantityCounter } from "..";
import { ChangeQuanity } from "../../redux/actions/Cart";

function CartItem({id, cartImgUrl, name, price, quantity, size}) {
  const items = useSelector(({Cart}) => Cart.items);
  const dispatch = useDispatch();
  const onChangeQuantity = (value) => {
    items.forEach(function (item) {
      if(item.id === id){
        dispatch(ChangeQuanity(id, value))
        // TO DO сделать action чтобы менялся объект cart в store
      }
    })
    //console.log(value)
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
