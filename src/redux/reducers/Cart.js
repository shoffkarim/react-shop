const InitState = {
  items: [],
  totalPrice: 0,
};

const CartReducer = (state = InitState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItems = [...state.items, action.payload];
      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => (obj.price * obj.quantity) + sum, 0);

      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
      };
    case "CHANGE_QUANTITY":
      const cartItems = [...state.items];
      cartItems.forEach(function (item) {
        if (item.id === action.id) {
          item.quantity = action.payload;
        }
      });
      return state;

    default:
      return state;
  }
};

export default CartReducer;
