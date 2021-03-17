import { combineReducers } from "redux";
import ProductItemsReducer from "./ProductItems";

const rootReducer = combineReducers({
  ProductItems: ProductItemsReducer
});

export default rootReducer;