import { combineReducers, createStore } from 'redux';
import { todosReducer } from './todosReducer';
import { productsReducer } from '../shopping/productsReducer';
import { cartReducer } from '../shopping/cartReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
