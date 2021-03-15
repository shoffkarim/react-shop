import React from "react";

function ProductCategories({id, name}) {
  return (
    <ul className="product-filter-menu">
      <li>
        <a href="fake">{name}</a>
      </li>
    </ul>
  );
}

export default ProductCategories;
