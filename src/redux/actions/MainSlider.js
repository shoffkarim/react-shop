import Axios from "axios";

export const setMainSliderItems = (items) => ({
  type: "SET_SLIDER_MAIN_ITEMS",
  payload: items
});

export const fetchMainSliderItems = () => (dispatch) => {
  Axios.get(`/mainSlider`)
  .then(({data}) =>
  dispatch(setMainSliderItems(data)));
};
