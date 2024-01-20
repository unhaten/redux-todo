import {todoAPI} from "../../services/todo.service.ts";

const Query = () => {
    const {data, error, isLoading} = todoAPI.useFetchTodosQuery
    return (
        <>
            test
        </>
    )
}

export default Query;