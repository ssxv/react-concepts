import { useReducer } from 'react';

interface ICounterAction {
  type: string;
}

const reducer = (count: number = 2, action: ICounterAction) => {
  switch (action.type) {
    case 'inc':
      return count + 1;
    case 'dec':
      return count - 1;
    default:
      return count;
  }
};

const CounterWithUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 2);
  return (
    <div>
      <h1>Counter with useReducer</h1>
      <button
        disabled={count <= 0}
        onClick={() => dispatch({ type: 'dec' })}
      >
        -
      </button>
      <span style={{ margin: '10px' }}>{count}</span>
      <button
        disabled={count >= 5}
        onClick={() => dispatch({ type: 'inc' })}
      >
        +
      </button>
    </div>
  );
};

export default CounterWithUseReducer;
