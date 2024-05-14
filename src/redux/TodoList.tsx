import { ConnectedProps, connect } from "react-redux";
import { IAppState } from "./store";
import { ITodo, todoDone } from "./todosActions";

type Props = ConnectedProps<typeof connector>

const TodoList: React.FC<Props> = ({ todos, todoDone }) => {

    const showTodo = (todo: ITodo) => {
        return <div>
            <button disabled={todo.done} type="button" onClick={() => todoDone(todo)}>
                {todo.done ? 'done' : 'mark done'}
            </button>
            <span>{todo.title}</span>
        </div>
    }

    const showTodoList = () => {
        return todos.map(todo => showTodo(todo));
    }

    return <>
        {showTodoList()}
    </>;
}

const mapStateToProps = (state: IAppState) => ({
    todos: state.todos.todos,
});

const mapDispatchToProps = {
    todoDone,
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const TodoListWithRedux = connector(TodoList);
export default TodoListWithRedux;
