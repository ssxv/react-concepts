import { ADD_TO_CART, REMOVE_FROM_CART } from './cartActions';

export const cartReducer = (cart = { products: [], cost: 0 }, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        products: [...cart.products, product],
        cost: cart.cost + product.price,
      };
    case REMOVE_FROM_CART:
      const remainingProducts = [];
      let newCost = cart.cost;
      let removed = false;
      cart.products.forEach((p) => {
        if (p.id !== product.id) {
          remainingProducts.push(p);
        } else {
          if (p.id === product.id) {
            if (removed) {
              remainingProducts.push(p);
            } else {
              removed = true;
              newCost -= p.price;
            }
          }
        }
      });
      return {
        products: [...remainingProducts],
        cost: newCost,
      };
    default:
      return cart;
  }
};
