import {ITodo} from "../../models/ITodo.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodoState {
    todos: ITodo[],
    count: number
}

const initialState: TodoState = {
    todos: [],
    count: 0
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add(state, action: PayloadAction<ITodo>) {
            state.todos.push(action.payload)
            state.count += 1
        },
        remove(state, action) {
            state.count -= 1
            state.todos = state.todos.filter(todo => todo.id !== action.payload
            )
        }
    }
})

export default todoSlice.reducer