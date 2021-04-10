import React from "react";

function QuantityCounter({ text, changeQuantity, defaultValue }) {
  const [value, setValue] = React.useState(defaultValue ? defaultValue : 1);

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
        <span className="dec qtybtn" onClick={() => decValue()}>-</span>
        <input type="text" value={value} onChange={changeQuantity(value)} readOnly={true}/>
        <span className="inc qtybtn" onClick={() => incValue()}>+</span>
      </div>
    </div>
  );
}

export default QuantityCounter;
