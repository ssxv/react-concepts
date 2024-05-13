import { useReducer } from 'react';

interface ICounterState {
  count: number;
}
interface ICounterAction {
  type: string;
}
const initialState: ICounterState = {
  count: 0,
};

const reducer = (state: ICounterState, action: ICounterAction) => {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Counter with useReducer</div>
      <button
        disabled={state.count <= 0}
        onClick={() => dispatch({ type: 'dec' })}
      >
        -
      </button>
      <span style={{ margin: '10px' }}>{state.count}</span>
      <button
        disabled={state.count >= 5}
        onClick={() => dispatch({ type: 'inc' })}
      >
        +
      </button>
    </div>
  );
};

export default CounterWithUseReducer;
