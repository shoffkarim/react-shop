const InitState = {
  item: {},
  isLoaded: false
}

const CardItemReducer = (state = InitState, action) => {
  switch(action.type){
    case "SET_CARD_ITEM" :
      return {
        ...state,
        item: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default CardItemReducer;