import './App.css';
import ErrorBoundary from './catch-error/ErrorBoundary';
import ErrorThrowingComponent from './catch-error/ErrorThrowingComponent';
import Tooltip from './pure-functions/Tooltip';
import CounterWithRedux from './redux/CounterWithRedux';
import TodosApp from './redux/Todos';

function App() {

  return (
    <>
      <Tooltip text={"Hover over me"} hintText={"This is a tooltip"} />
      <CounterWithRedux />
      <TodosApp />
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    </>
  );
}

export default App;
