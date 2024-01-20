import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ['Todos'],
    endpoints: build => ({
        fetchTodos: build.query({
            query: () => ({
                url: '/todos'
            })
        })
    })
})