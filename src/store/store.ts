import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo.slice.ts";
import {todoAPI} from "../services/todo.service.ts";

const rootReducer = combineReducers({
    todoReducer,
    [todoAPI.reducerPath]: todoAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(todoAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']