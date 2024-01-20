import {FC} from "react";
import s from './styles.module.css'
import {todoSlice} from "../../store/reducers/todo.slice.ts";
import {useAppDispatch} from "../../hooks/redux.ts";

interface ITodoItem {
    title: string;
    description: string;
    id: string;
}

const TodoItem: FC<ITodoItem> = ({title, description, id}) => {
    const {remove} = todoSlice.actions
    const dispatch = useAppDispatch()

    const handleRemove = (id: string) => {
        dispatch(remove(id))
    }
    return (
        <div className={s.container}>
            <div>
                title: {title}
            </div>
            <div>
                description: {description}
            </div>
            <button className={s.button} onClick={() => handleRemove(id)}>delete</button>
        </div>
    )
}

export default TodoItem;