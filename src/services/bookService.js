import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { stepPagination } from "../constant";

const key = "AIzaSyAF25h0jb4ysSzwGi33j8cHiXQok_Ou9-8";

export const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (data) => {
        try {
          const { searchInput, category, sorting, startIndex } = data;
          const request = `volumes?q=${searchInput}`;
          const subject = category !== "all" ? `+subject:${category}` : "";
          const orderBy = `&orderBy=${sorting}`;
          const start = `&startIndex=${startIndex}`;
          const end = `&maxResults=${stepPagination}`;

          return `${request}${subject}${start}${end}${orderBy}&key=${key}`;
        } catch (e) {
          return { error: e.message };
        }
      },
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
