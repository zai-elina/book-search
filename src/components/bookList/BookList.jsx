import React, { useEffect, useState } from "react";
import classes from "./BookList.module.css";
import BookItem from "./bookItem/BookItem";
import {
  bookListSelector,
  categorySelector,
  searchInputSelector,
  sortingSelector,
  startIndexSelector,
} from "../../store/selectors/dataSelector";
import { useDispatch, useSelector } from "react-redux";
import { useGetBooksQuery } from "../../services/bookService";
import { setBookList, setCountOfBook } from "../../store/slices/dataSlices";
import { Loader } from "../layout/loader/Loader";

const BookList = ({ queryTerm, setQueryTerm }) => {
  const dispatch = useDispatch();
  const searchInput = useSelector(searchInputSelector);
  const category = useSelector(categorySelector);
  const sorting = useSelector(sortingSelector);
  const startIndex = useSelector(startIndexSelector);
  const { data, isLoading, error } = useGetBooksQuery({
    searchInput,
    category,
    sorting,
    startIndex,
  });
  const books = useSelector(bookListSelector);

  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setBookList(data.items));
      if (startIndex === 0) {
        dispatch(setCountOfBook(data.totalItems));
      }
    }
  }, [data, isLoading, error]);

  return (
    <section className={classes.bookList}>
      {isLoading && (
        <div className={classes.loader}>
          <Loader />
        </div>
      )}
      {books && books.map((book) => <BookItem key={book.id} book={book} />)}
    </section>
  );
};

export default BookList;
