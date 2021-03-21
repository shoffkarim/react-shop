import { combineReducers } from "redux";
import ProductItemsReducer from "./ProductItems";
import ProductCategoriesReducer from "./ProductCategories";

const rootReducer = combineReducers({
  ProductItems: ProductItemsReducer,
  ProductCategories: ProductCategoriesReducer
});

export default rootReducer;