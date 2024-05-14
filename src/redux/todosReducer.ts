import { ITodo, ITodosAction } from "./todosActions";

export interface ITodosState {
    todos: ITodo[]
}

const initialTodosState: ITodosState = {
    todos: []
}

export const todosReducer = (state = initialTodosState, action: ITodosAction) => {
    switch (action.type) {
        case "add": {
            const todo = action.payload;
            const todos = state.todos;
            todos.push(todo);
            return { ...state, todos: [...todos] };
        }
        case "done": {
            const todo = state.todos.find(t => t.id === action.payload.id);
            if (todo) {
                todo.done = true;
            }           
            return { ...state, todos: [...state.todos] };
        }
        default:
            return state;
    }
}