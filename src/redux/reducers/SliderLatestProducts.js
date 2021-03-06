const InitState = {
  items: [],
  isLoaded: false
}

const SliderLatestProductReducer = (state = InitState, action) => {
  switch(action.type){
    case "SET_SLIDER_LATPROD_ITEMS" :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default SliderLatestProductReducer;