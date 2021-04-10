const InitState = {
  items: {}
}

const CartReducer = (state = InitState, action) => {
  switch(action.type){
    case "ADD_TO_CART" :
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload]
      };
      return {
        ...state,
        items: newItems,
      }

    default:
      return state
  }
};

export default CartReducer;