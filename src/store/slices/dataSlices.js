import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
  category: "all",
  sorting: "relevance",
  books: [],
  startIndex: 0,
  countOfBook: 0,
  isLoadingData: false,
  selectedBook: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setBookList: (state, action) => {
      const books = action.payload;

      if (!books) {
        state.books = [];
      }
      if (state.startIndex === 0) {
        state.books = books;
      } else {
        state.books = [...state.books, ...books];
      }
    },
    clearBookList: (state, action) => {
      state.books = [];
    },
    changeCategory: (state, action) => {
      const category = action.payload;
      state.category = category;
    },
    changeSorting: (state, action) => {
      const sorting = action.payload;
      state.sorting = sorting;
    },
    setSearchInput: (state, action) => {
      const inputValue = action.payload;
      state.searchInput = inputValue;
    },
    incrementStartIndex: (state, action) => {
      state.startIndex += action.payload;
    },
    setCountOfBook: (state, action) => {
      state.countOfBook = action.payload;
    },
    setIsLoadingData: (state, action) => {
      state.isLoadingData = action.payload;
    },
    selectNewBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

export const {
  setBookList,
  changeCategory,
  changeSorting,
  setSearchInput,
  incrementStartIndex,
  setCountOfBook,
  setIsLoadingData,
  clearBookList,
  selectNewBook,
} = dataSlice.actions;

export default dataSlice.reducer;
