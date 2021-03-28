import React from "react";

function QuantityCounter({ text }) {
  const [value, setValue] = React.useState(1);

  const decValue = () => {
    if(value === 1){
      setValue(value);
    } else {
      setValue(value - 1);
    }
  }

  const incValue = () => {
    setValue(value + 1);
  }

  return (
    <div className="quantity">
      {text && <p>{text}</p>}
      <div className="pro-qty">
        <span class="dec qtybtn" onClick={() => decValue()}>-</span>
        <input type="text" value={value}/>
        <span class="inc qtybtn" onClick={() => incValue()}>+</span>
      </div>
    </div>
  );
}

export default QuantityCounter;
