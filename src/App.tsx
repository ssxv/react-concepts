import { useState, createContext, Dispatch, SetStateAction } from 'react';
import './App.css';
import ErrorBoundary from './catch-error/ErrorBoundary';
import ErrorThrowingComponenet from './catch-error/ErrorThrowingComponent';

export interface IMyContext {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

export const MyContext = createContext<IMyContext>({ name: '', setName: () => { } });

function App() {
  const [name, setName] = useState('');

  return (
    <MyContext.Provider value={{ name, setName }}>
      <ErrorBoundary>
        <ErrorThrowingComponenet />
      </ErrorBoundary>
    </MyContext.Provider>
  );
}

export default App;
