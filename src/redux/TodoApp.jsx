import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, createTodo } from './todoActions';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleTaskChange = (e) => setTask(e.target.value);

  const handleTaskCreate = (e) => {
    dispatch(createTodo({ id: new Date().getTime(), task }));
    setTask('');
  };

  const handleTaskComplete = (todo) => {
    dispatch(completeTodo(todo));
  };

  return (
    <>
      <h3>TODO APP</h3>

      <input
        type="text"
        onChange={handleTaskChange}
        placeholder="add a task"
        value={task}
      />
      <button onClick={handleTaskCreate}>Create</button>

      <ul style={{ textAlign: 'left' }}>
        {todos.map((todo) => {
          return (
            <li>
              <button
                disabled={todo.done}
                onClick={() => handleTaskComplete(todo)}
              >
                {todo.done ? 'done' : 'del'}
              </button>
              <span>{todo.task}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoApp;
