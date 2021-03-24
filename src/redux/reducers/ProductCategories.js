const InitState = {
  items: [],
  isLoaded: false
}

const ProductCategoriesReducer = (state = InitState, action) => {
  switch(action.type){
    case "SET_PRODUCT_CATEGORIES" :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default ProductCategoriesReducer;