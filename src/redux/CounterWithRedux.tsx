import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { increment, decrement } from './counterActions';
import { IAppState } from './store';

// Define component props and Redux state props
type Props = ConnectedProps<typeof connector>;

const Counter: React.FC<Props> = ({ count, increment, decrement }) => {
  return (
    <div>
      <div>Counter with Redux</div>
      <button disabled={count <= 0} onClick={decrement}>
        -
      </button>
      <span style={{ margin: '10px' }}>{count}</span>
      <button disabled={count >= 5} onClick={increment}>
        +
      </button>
    </div>
  );
};

// Define mapStateToProps function
const mapStateToProps = (state: IAppState) => ({
  count: state.counter.count,
});

// Define mapDispatchToProps object
const mapDispatchToProps = {
  increment,
  decrement,
};

// Connect component to Redux store
const connector = connect(mapStateToProps, mapDispatchToProps);
const CounterWithRedux = connector(Counter);
export default CounterWithRedux;
