import React from "react";

function CardTotal({totalPrice}) {
  return (
    <div className="total-cost">
      <h6>
        Total <span>${totalPrice}</span>
      </h6>
    </div>
  );
}

export default CardTotal;
