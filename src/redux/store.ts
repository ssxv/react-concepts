import { combineReducers, createStore } from 'redux';
import counterReducer, { ICounterState } from './counterReducer';

export interface IAppState {
  counter: ICounterState;
}
const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;
