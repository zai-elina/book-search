import { createSelector } from "@reduxjs/toolkit";

export const searchInputSelector = (state) => state.data.searchInput;

export const categorySelector = (state) => state.data.category;

export const sortingSelector = (state) => state.data.sorting;

export const bookListSelector = (state) => state.data.books;

export const countOfBookSelector = (state) => state.data.countOfBook;

export const startIndexSelector = (state) => state.data.startIndex;

export const isLoadingDataSelector = (state) => state.data.isLoadingData;

export const selectedBookSelector = (state) => state.data.selectedBook;

export const bookByIDSelector = createSelector(
  [bookListSelector, (state, id) => id],
  (books, id) => {
    return books.filter((book) => book.id === id)[0];
  }
);
