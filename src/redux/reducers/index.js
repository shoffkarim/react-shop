import { combineReducers } from "redux";
import ProductItemsReducer from "./ProductItems";
import ProductCategoriesReducer from "./ProductCategories";
import SliderLatestProductReducer from "./SliderLatestProducts";
import MainSliderProductReducer from "./MainSlider";
import CardItemReducer from "./CardItem";

const rootReducer = combineReducers({
  ProductItems: ProductItemsReducer,
  ProductCategories: ProductCategoriesReducer,
  SliderLatestProduct: SliderLatestProductReducer,
  MainSliderItems: MainSliderProductReducer,
  CardItem: CardItemReducer,
});

export default rootReducer;