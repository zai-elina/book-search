import React, { useDebugValue, useEffect } from "react";
import classes from "./BookList.module.css";
import BookItem from "./bookItem/BookItem";
import { bookListSelector } from "../../store/selectors/dataSelector";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoadingData } from "../../store/slices/dataSlices";

const BookList = () => {
  const books = useSelector(bookListSelector);

  return (
    <section className={classes.bookList}>
      {books &&
        books.map((book) => <BookItem key={book.id + book.etag} book={book} />)}
    </section>
  );
};

export default BookList;
