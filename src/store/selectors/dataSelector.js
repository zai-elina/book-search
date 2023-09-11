import { createSelector } from "@reduxjs/toolkit";

export const searchInputSelector = (state) => state.data.searchInput;

export const categorySelector = (state) => state.data.category;

export const sortingSelector = (state) => state.data.sorting;

export const bookListSelector = (state) => state.data.books;

export const totalItemsSelector = (state) => state.data.totalItems;

export const bookByIDSelector = createSelector(
  [bookListSelector, (state, id) => id],
  (books, id) => {
    return books.filter((book) => book.id === id)[0];
  }
);
