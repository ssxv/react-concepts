import { ConnectedProps, connect } from 'react-redux';
import { Store } from './store';
import { Action } from 'redux';

/*
1. create a reducer 
2. create a store createStore()
3. wrap App with Provider store={store}
 */
export const counterReducer = (count = 0, action: Action) => {
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
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
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