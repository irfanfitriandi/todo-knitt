import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { TodoTypes } from "../types/todo";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTodos: builder.query<TodoTypes[], number>({
      query: (page) => `todos?_start=${page}&_limit=10`,
    }),
    addTodo: builder.mutation<any, Partial<{ title: string }>>({
      query: (data) => ({
        url: "todos",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  util: { getRunningQueriesThunk },
} = todoApi;

export const { getTodos } = todoApi.endpoints;
