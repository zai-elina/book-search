import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
  category: "all",
  sorting: "relevance",
  books: [],
  totalItems: 0,
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
    setTotalItems: (state, action) => {
      const { totalItems } = action.payload;
      state.totalItems = totalItems;
    },
  },
});

export const {
  setBookList,
  changeCategory,
  changeSorting,
  setSearchInput,
  setTotalItems,
} = dataSlice.actions;

export default dataSlice.reducer;
