import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
  category: "all",
  sorting: "relevance",
  bookList: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setBookList: (state, action) => {
      const { books } = action.payload;
      state.books = books;
    },
    changeCategory: (state, action) => {
      const { category } = action.payload;
      state.category = category;
    },
    changeSorting: (state, action) => {
      const { sorting } = action.payload;
      state.sorting = sorting;
    },
    setSearchInput: (state, action) => {
      const { input } = action.payload;
      state.searchInput = input;
    },
  },
});

export const { setBookList, changeCategory, changeSorting, setSearchInput } =
  dataSlice.actions;

export default dataSlice.reducer;
