import { combineReducers } from "redux";
import ProductItemsReducer from "./ProductItems";
import ProductCategoriesReducer from "./ProductCategories";
import SliderLatestProduct from "./SliderLatestProducts";

const rootReducer = combineReducers({
  ProductItems: ProductItemsReducer,
  ProductCategories: ProductCategoriesReducer,
  SliderLatestProduct: SliderLatestProduct
});

export default rootReducer;