import { ACTION_TODO_COMPLETE, ACTION_TODO_CREATE } from './todoActions';

export const todosReducer = (todos = [], action) => {
  const todo = action.payload;
  switch (action.type) {
    case ACTION_TODO_CREATE:
      return [...todos, todo];
    case ACTION_TODO_COMPLETE:
      return todos.map((t) => {
        if (t.id == todo.id) {
          t.done = true;
        }
        return t;
      });
    default:
      return todos;
  }
};
