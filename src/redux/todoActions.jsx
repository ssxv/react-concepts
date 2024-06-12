export const ACTION_TODO_CREATE = 'create';
export const ACTION_TODO_COMPLETE = 'complete';

export const createTodo = (todo) => ({
  type: ACTION_TODO_CREATE,
  payload: todo,
});

export const completeTodo = (todo) => ({
  type: ACTION_TODO_COMPLETE,
  payload: todo,
});
