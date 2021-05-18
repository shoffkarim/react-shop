export const AddToCart = (id) => ({
  type: "ADD_TO_CART",
  payload: id
});

export const ChangeQuanity = (id, quantity) => ({
  type: "CHANGE_QUANTITY",
  id: id,
  payload: quantity
});