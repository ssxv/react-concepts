import { useContext, useReducer } from 'react';
import { UserContext } from '../context/CurrentUserProvider';

const counterReducer = (count, action) => {
  switch (action.type) {
    case 'inc':
      return count + 1;
    case 'dec':
      return count - 1;
    default:
      return count;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 2);
  const { user } = useContext(UserContext);
  return (
    <>
      <h3>Counter with useReducer()</h3>
      <div>
        <button onClick={() => dispatch({ type: 'dec' })}>-</button>
        {count}
        <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      </div>
      <div>by - {user}</div>
    </>
  );
};

export default Counter;
