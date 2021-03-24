import Axios from "axios";

export const setProductItems = (items) => ({
  type: "SET_PRODUCT_ITEMS",
  payload: items
});

export const fetchItems = () => (dispatch) => {
  Axios.get(`http://localhost:3001/items`)
  .then(({data}) =>
  dispatch(setProductItems(data)));
};
