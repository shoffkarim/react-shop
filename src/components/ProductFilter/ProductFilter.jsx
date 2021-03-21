import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/actions/ProductCategories";
import { fetchItems } from "../../redux/actions/ProductItems";
import ProductCategories from "./ProductCategories";
import ProductItem from "./ProductItem";


const obj = {
  id: 0,
  imageUrl: "/img/product/1.jpg",
  name: "Flamboyant Pink Top",
  price: "35.00",
  sizes: [32, 36, 38, 42],
  category: 0,
  rating: 4,
  reviews: 3,
  information:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p><br><p>Approx length 66cm/26 (Based on a UK size 8 sample)</p>",
  mark: "on sale",
};
const objCategories = {
  id: 0,
  name: "TOPS"
}

function ProductFilter() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchItems());
  }, []);

  const items = useSelector(({ProductItems}) => ProductItems.items);
  const categories = useSelector(({ProductCategories}) => ProductCategories.items);
  return (
    <section className="product-filter-section">
      <div className="container">
        <div className="section-title">
          <h2>BROWSE TOP SELLING PRODUCTS</h2>
        </div>
        <ul className="product-filter-menu">
          {categories && categories.map((obj) => <ProductCategories key={obj.id} {...obj}/>)}
        </ul>
        <div className="row">
            {items && items.map((obj) => <ProductItem key={obj.id} {...obj} />)}
        </div>
        <div className="text-center pt-5">
          <button className="site-btn sb-line sb-dark">LOAD MORE</button>
        </div>
      </div>
    </section>
  );
}

export default ProductFilter;
