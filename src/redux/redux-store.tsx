import { combineReducers, createStore } from "redux";
import { counterReducer } from "./ReduxCounter";
import { Todo } from "./todosActions";
import { todosReducer } from "./todosReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer,
});

export interface Store {
  count: number;
  todos: Todo[];
}
const reduxStore = createStore(rootReducer);

export default reduxStore;
