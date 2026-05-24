import type {Todo} from "@/05-useReducer/types";

// * INTERFAZ DEL ESTADO
interface TaskState {
    todos: Todo[],
    length: number,
    pending: number,
    completed: number
}

// * ACCIONES PERMITIDAS PARA EL REDUCER
type TodoActions =
    | { type: "add", payload: string }
    | { type: "delete", payload: number }
    | { type: "toggle", payload: number }

// * ESTADO INICIAL DEL REDUCER
export const initialState: TaskState = {
    todos: [],
    length: 0,
    completed: 0,
    pending: 0
}

export const taskReducer = (state: TaskState, action: TodoActions): TaskState => {
    switch (action.type) {
        case "add": {
            if (action.payload.trim() === "") return state;

            return {
                ...state,
                length: state.todos.length + 1,
                pending: state.pending + 1,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload.trim(),
                    completed: false
                }]
            };
        }
        case "delete": {
            const currentTodos = state.todos.filter((t) => t.id !== action.payload);
            return {
                ...state,
                length: currentTodos.length,
                todos: currentTodos,
                pending: currentTodos.filter((t) => !t.completed).length,
                completed: currentTodos.length - state.pending
            }
        }
        case "toggle": {
            const currentTodos = state.todos.map((t) => t.id === action.payload ? {...t, completed: !t.completed} : t);

            return {
                ...state,
                length: currentTodos.length,
                pending: currentTodos.filter((t) => !t.completed).length,
                completed: currentTodos.filter((t) => t.completed).length,
                todos: currentTodos
            }
        }
        default:
            return state;
    }
}