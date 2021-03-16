import { createStore } from "redux";
import ProductItemsReducer from "./reducers/ProductItems";

const store = createStore(ProductItemsReducer);

export default store;