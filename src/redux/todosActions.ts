export interface ITodo {
    id: string;
    title: string;
    done?: boolean;
}
export interface ITodosAction {
    type: string;
    payload: ITodo;
}

export const addTodo = (todo: ITodo): ITodosAction => {
    return {
        type: "add",
        payload: todo,
    }
}

export const todoDone = (todo: ITodo): ITodosAction => {
    return {
        type: "done",
        payload: todo,
    }
}
