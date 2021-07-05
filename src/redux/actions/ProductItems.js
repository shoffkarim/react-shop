import Axios from "axios";

export const setProductItems = (items) => ({
  type: "SET_PRODUCT_ITEMS",
  payload: items
});

export const fetchItems = () => (dispatch) => {
  Axios.get(`/items`)
  .then(({data}) =>
  dispatch(setProductItems(data)));
};

export const fetchItemsWidthCategory = (categoryId) => (dispatch) => {
  Axios.get(`/items?category=${categoryId}`)
  .then(({data}) =>
  dispatch(setProductItems(data)));
}
