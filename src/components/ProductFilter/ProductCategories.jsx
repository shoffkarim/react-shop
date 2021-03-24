import React from "react";

function ProductCategories({id, name, onSelectCategory}) {
  return (
    <li onClick={() => onSelectCategory(id)}>
      <span>{name}</span>
    </li>
  );
}

export default ProductCategories;
