import Axios from "axios";

export const setProductCategories = (items) => ({
  type: "SET_PRODUCT_CATEGORIES",
  payload: items
});

export const fetchCategories = () => (dispatch) => {
  Axios.get(`http://localhost:3002/categories`)
  .then(({data}) =>
  dispatch(setProductCategories(data)));
};