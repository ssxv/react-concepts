import { Todo, TodosAction } from "./todosActions";

export const todosReducer = (todos: Todo[] = [], action: TodosAction): Todo[] => {
    switch (action.type) {
        case "add": {
            const todo: Todo = action.payload;
            todos.push(todo);
            return [...todos];
        }
        case "done": {
            const todo = todos.find(t => t.id === action.payload.id);
            if (todo) {
                todo.done = true;
            }
            return [...todos];
        }
        default:
            return todos;
    }
}
