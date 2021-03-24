import Axios from "axios";

export const setSliderLatProdItems = (items) => ({
  type: "SET_SLIDER_LATPROD_ITEMS",
  payload: items
});

export const fetchSliderLatProdItems = () => (dispatch) => {
  Axios.get(`http://localhost:3001/sliderLatestProducts`)
  .then(({data}) =>
  dispatch(setSliderLatProdItems(data)));
};
