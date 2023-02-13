export const setAddPizzaToCart = (obj) => ({
  type: "ADD_PIZZA",
  payload: obj,
});

export const setClearCart = () => ({
  type: "CLEAR_CART",
});

export const setRemoveCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});

export const setPlusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",
  payload: id,
});

export const setMinusCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});


