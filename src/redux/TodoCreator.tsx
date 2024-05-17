import { ConnectedProps, connect } from "react-redux"
import { Todo, addTodo } from "./todosActions";

type Props = ConnectedProps<typeof connector>;

const TodoCreator: React.FC<Props> = ({ addTodo }) => {

    const createTodo = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data: any = Object.fromEntries(formData);
        const todo: Todo = {
            id: new Date().getTime().toString(),
            title: data.title,
        }
        addTodo(todo);
    }

    return (
        <form onSubmit={createTodo}>
            <input type="text" name="title" id="title" />
            <button type="submit">Create Todo</button>
        </form>
    );
}

const mapStateToProps = () => ({});
const mapDispatchToProps = { addTodo }
const connector = connect(mapStateToProps, mapDispatchToProps);
const TodoCreatorWithRedux = connector(TodoCreator);
export default TodoCreatorWithRedux;
