import React, { useEffect } from "react";
import classes from "./BookList.module.css";
import BookItem from "./bookItem/BookItem";
import {
  bookListSelector,
  categorySelector,
  searchInputSelector,
} from "../../store/selectors/dataSelector";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../services/bookService";
import { setBookList } from "../../store/slices/dataSlices";
import { Loader } from "../layout/loader/Loader";

const BookList = ({ queryTerm }) => {
  const searchInput = useSelector(searchInputSelector);
  const category = useSelector(categorySelector);
  const { data, isLoading, error } = useGetBooksQuery({
    searchInput,
    category,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.bookList}>
      {!isLoading && !error
        ? data?.items.map((book) => <BookItem key={book.id} book={book} />)
        : ""}
    </section>
  );
};

export default BookList;
