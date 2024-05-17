import { Action } from "redux";

export interface Todo {
    id: string;
    title: string;
    done?: boolean;
}
export interface TodosAction extends Action {
    payload: Todo;
}

export const addTodo = (todo: Todo): TodosAction => {
    return {
        type: "add",
        payload: todo,
    }
}

export const todoDone = (todo: Todo): TodosAction => {
    return {
        type: "done",
        payload: todo,
    }
}
