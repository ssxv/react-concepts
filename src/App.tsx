import './App.css';
import Tooltip from './pure-functions/Tooltip';
import CounterWithRedux from './redux/CounterWithRedux';
import TodosApp from './redux/Todos';

function App() {

  return (
    <>
      <Tooltip text={"Hover over me"} hintText={"This is a tooltip"} />
      <CounterWithRedux />
      <TodosApp />
    </>
  );
}

export default App;
