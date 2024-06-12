export const ADD_TO_CART = 'addToCart';
export const REMOVE_FROM_CART = 'removeFromCart';

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});
