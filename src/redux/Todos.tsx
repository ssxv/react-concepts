import TodoCreatorWithRedux from "./TodoCreator";
import TodoListWithRedux from "./TodoList";

const TodosApp: React.FC = () => {

    return (
        <>
            <h1>Todo Application</h1>
            <TodoCreatorWithRedux />
            <TodoListWithRedux />
        </>
    );
}

export default TodosApp;
