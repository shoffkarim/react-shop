const InitState = {
  items: [],
  totalPrice: 0,
}

const CartReducer = (state = InitState, action) => {
  switch(action.type){
    case "ADD_TO_CART" :
      const newItems = [
        ...state.items,
        action.payload
      ];
      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);
      
      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice
      }

    default:
      return state
  }
};

export default CartReducer;