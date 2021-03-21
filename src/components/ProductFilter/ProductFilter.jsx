import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/actions/ProductCategories";
import { fetchItems } from "../../redux/actions/ProductItems";
import ProductCategories from "./ProductCategories";
import ProductItem from "./ProductItem";


function ProductFilter() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchItems());
  }, [dispatch]);

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
