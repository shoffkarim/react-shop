const InitState = {
  items: [],
  isLoaded: false
}

const MainSliderProductReducer = (state = InitState, action) => {
  switch(action.type){
    case "SET_SLIDER_MAIN_ITEMS" :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default MainSliderProductReducer;