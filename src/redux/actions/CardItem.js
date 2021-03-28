import Axios from "axios";

export const setCardItem = (item) => ({
  type: "SET_CARD_ITEM",
  payload: item
});

export const fetchCardItem = (id) => (dispatch) => {
  Axios.get(`http://localhost:3001/items?id=${id}`)
  .then(({data}) =>
  dispatch(setCardItem(data)));
};
