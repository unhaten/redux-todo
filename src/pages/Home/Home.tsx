import {todoSlice} from "../../store/reducers/todo.slice.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {ChangeEvent, useState} from "react";
import {nanoid} from "nanoid";
import s from "../../styles.module.css";
import TodoList from "../../components/TodoList/TodoList.tsx";

const Home = () => {
    const {add} = todoSlice.actions
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleSubmit = (e: ChangeEvent) => {
        e.preventDefault()
        dispatch(add({id: nanoid(), title: title, description: description}))
    }
    return (
        <div className={s.container}>
            <TodoList/>
            <h3>add todos below</h3>
            <form className={s.form} onSubmit={handleSubmit}>
                <input type="text" placeholder={'title'} onChange=
                    {(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder={'description'} onChange=
                    {(e) => setDescription(e.target.value)}/>
                <button>add
                </button>
            </form>
        </div>
    )
}

export default Home;