import './App.css';
import ErrorBoundary from './catch-error/ErrorBoundary';
import ErrorThrowingComponent from './catch-error/ErrorThrowingComponent';
import ClassComponentCounter from './class-component/ClassComponentCounter';
import AuthProvider from './custom-hooks/Auth';
import AuthUserComponent from './custom-hooks/Component';
import CustomHookCounter from './custom-hooks/CustomHookCounter';
import Tooltip from './pure-functions/Tooltip';
import ReduxCounter, { ReduxCounterWithReduxHooks } from './redux/ReduxCounter';
import TodosApp from './redux/Todos';
import CounterWithUseReducer from './useReducer/CounterWithUseReducer';
import UseStateCounter from './useState/Counter';

function App() {

  return (
    <>
      <Tooltip text='Hover over me' hintText='I am a hint' />

      <UseStateCounter />

      <CustomHookCounter />

      <ClassComponentCounter />

      <AuthProvider>
        <AuthUserComponent />
      </AuthProvider>

      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>

      <ReduxCounter />
      <ReduxCounterWithReduxHooks />

      <CounterWithUseReducer />

      <TodosApp />
    </>
  );
}

export default App;
