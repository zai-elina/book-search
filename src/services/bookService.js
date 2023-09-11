import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = "AIzaSyAF25h0jb4ysSzwGi33j8cHiXQok_Ou9-8";

export const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (data) => {
        const { searchInput, category, sorting } = data;
        const startRequest = `volumes?q=${searchInput}`;
        const subject = data.category !== "all" ? `+subject:${category}` : "";
        const orderBy = `&orderBy=${sorting}`;
        return `${startRequest}${subject}${orderBy}&key=${key}`;
      },
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
