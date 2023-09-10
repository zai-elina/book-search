import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlices";
import { booksApi } from "../services/bookService";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
