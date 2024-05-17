import './App.css';
import ErrorBoundary from './catch-error/ErrorBoundary';
import ErrorThrowingComponent from './catch-error/ErrorThrowingComponent';
import ClassComponentCounter from './class-component/ClassComponentCounter';
import AuthProvider from './custom-hooks/Auth';
import AuthUserComponent from './custom-hooks/Component';
import ReduxCounter from './redux/ReduxCounter';
import TodosApp from './redux/Todos';
import CounterWithUseReducer from './useReducer/CounterWithUseReducer';

function App() {

  return (
    <>
      <ClassComponentCounter />

      <AuthProvider>
        <AuthUserComponent />
      </AuthProvider>

      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>

      <ReduxCounter />

      <CounterWithUseReducer />

      <TodosApp />
    </>
  );
}

export default App;
