import React, { useEffect } from "react";
import classes from "./BookList.module.css";
import BookItem from "./bookItem/BookItem";
import {
  categorySelector,
  searchInputSelector,
} from "../../store/selectors/dataSelector";
import { useDispatch, useSelector } from "react-redux";
import { useGetBooksQuery } from "../../services/bookService";
import { setBookList, setTotalItems } from "../../store/slices/dataSlices";
import { Loader } from "../layout/loader/Loader";

const BookList = ({ queryTerm }) => {
  const dispatch = useDispatch();
  const searchInput = useSelector(searchInputSelector);
  const category = useSelector(categorySelector);
  const { data, isLoading, error } = useGetBooksQuery({
    searchInput,
    category,
  });

  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setBookList({ books: data.items }));
      dispatch(setTotalItems({ totalItems: data.totalItems }));
    }
  }, [data, isLoading, error]);

  return (
    <section className={classes.bookList}>
      {isLoading ? (
        <Loader />
      ) : !isLoading && !error ? (
        data?.items.map((book) => <BookItem key={book.id} book={book} />)
      ) : (
        ""
      )}
    </section>
  );
};

export default BookList;
