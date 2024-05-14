import { combineReducers, createStore } from 'redux';
import counterReducer, { ICounterState } from './counterReducer';
import { ITodosState, todosReducer } from './todosReducer';

export interface IAppState {
  counter: ICounterState;
  todos: ITodosState;
}

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer);

export default store;
