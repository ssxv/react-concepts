import { ConnectedProps, connect, useDispatch, useSelector } from 'react-redux';
import { Store } from './redux-store';
import { Action } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

/*
1. create a reducer 
2. create a store createStore()
3. wrap App with Provider store={store}
 */
export const counterReducer = (count = 0, action: Action): number => {
  switch (action.type) {
    case 'inc':
      return count + 1;
    case 'dec':
      return count - 1;
    default:
      return count;
  }
};


const increment = () => ({
  type: 'inc',
});

const decrement = () => ({
  type: 'dec',
});

type Props = ConnectedProps<typeof connector>;
const Counter: React.FC<Props> = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Redux Counter</h1>
      <button
        disabled={count <= 0}
        onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button
        disabled={count >= 5}
        onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapStateToProps = (store: Store) => ({
  count: store.count,
});

const mapDispatchToProps = { increment, decrement };

const connector = connect(mapStateToProps, mapDispatchToProps);
const ReduxCounter = connector(Counter);
export default ReduxCounter;

// useSelector, useDispatch
export const ReduxCounterWithReduxHooks = () => {
  const count = useSelector((state: Store) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Counter with Redux Hooks</h1>
      <button
        disabled={count <= 0}
        onClick={() => dispatch(decrement())}>
        -
      </button>
      <span>{count}</span>
      <button
        disabled={count >= 5}
        onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
}

// ReduxJS toolkit
/*
1. create store with configureStore with empty reducer: {}
2. wrap app with a Provider with store
3. create a slice using createSlice: with name, initialState and reducers with action functions { actionname: actionfunction }
4. createSlice returns a slice with reducers and actions
5. add createSlice.reducer to reducer in store against a key
6. get value in component using useSelector state.key
7. get actions from slice.actions
 */
export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (count) => count + 1,
    decrement: (count) => count - 1,
  }
});

export const ReduxToolkitCounterWithReduxHooks = () => {
  const count = useSelector((state: Store) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <button
        disabled={count <= 0}
        onClick={() => dispatch(counterSlice.actions.decrement())}>
        -
      </button>
      <span>{count}</span>
      <button
        disabled={count >= 5}
        onClick={() => dispatch(counterSlice.actions.increment())}>
        +
      </button>
    </div>
  );
}
