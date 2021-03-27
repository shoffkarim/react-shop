import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ItemDetails from "../components/ItemDetails/ItemDetails";
import ItemSlider from "../components/ItemSlider/ItemSlider";
import ProductSlider from "../components/ProductSlider/ProductSlider";

function Item() {
  return (
    <div>
      <Breadcrumbs/>
      <section className="product-section">
        <div className="container">
          <div className="back-link">
            <a href="./category.html"> &lt;&lt; Back to Category</a>
          </div>
          <div className="row">
            <ItemSlider/>
            <ItemDetails/>
          </div>
        </div>
      </section>
      <ProductSlider/>
    </div>
  );
}

export default Item;
