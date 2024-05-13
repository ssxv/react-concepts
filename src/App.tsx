import { useState, createContext } from 'react';
import './App.css';
import ErrorBoundary from './catch-error/ErrorBoundary';
import ErrorThrowingComponenet from './catch-error/ErrorThrowingComponent';
import Login from './form/Login';
import Tooltip from './pure-functions/Tooltip';
import Counter from './useState/Counter';
import Rating from './array-of-elements/Rating';
import CounterWithUseReducer from './useReducer/CounterWithUseReducer';
import CounterWithRedux from './redux/CounterWithRedux';

export const MyContext = createContext({});

function App() {
  const [name, setName] = useState('');

  return (
    <MyContext.Provider value={{ name, setName }}>
      <Tooltip />

      <Counter />

      <CounterWithUseReducer />

      <CounterWithRedux />

      <Rating />

      <ErrorBoundary>
        <ErrorThrowingComponenet />
      </ErrorBoundary>

      <Login />
    </MyContext.Provider>
  );
}

export default App;
