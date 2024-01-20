import {useAppSelector} from "../../hooks/redux.ts";
import TodoItem from "../TodoItem/TodoItem.tsx";

const TodoList = () => {
    const {todos, count} = useAppSelector(state => state.todoReducer)

    return (
        <div>
            {todos.length > 0 ?
                <div>{todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title}
                                                  description={todo.description}/>)}</div> :
                <div>No todos</div>}
            <h4>amount of todos: {count}</h4>
        </div>
    )
}

export default TodoList;