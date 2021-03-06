const InitState = {
  items: [],
  isLoaded: false
}

const ProductItemsReducer = (state = InitState, action) => {
  switch(action.type){
    case "SET_PRODUCT_ITEMS" :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default ProductItemsReducer;