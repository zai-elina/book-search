import React, { useEffect } from "react";
import classes from "./BookList.module.css";
import BookItem from "./bookItem/BookItem";
import {
  categorySelector,
  searchInputSelector,
  sortingSelector,
} from "../../store/selectors/dataSelector";
import { useDispatch, useSelector } from "react-redux";
import { useGetBooksQuery } from "../../services/bookService";
import { setBookList } from "../../store/slices/dataSlices";
import { Loader } from "../layout/loader/Loader";

const BookList = ({ queryTerm, setTotalItems }) => {
  const dispatch = useDispatch();
  const searchInput = useSelector(searchInputSelector);
  const category = useSelector(categorySelector);
  const sorting = useSelector(sortingSelector);
  const { data, isLoading, error } = useGetBooksQuery({
    searchInput,
    category,
    sorting,
  });

  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setBookList({ books: data.items }));
      setTotalItems(data.totalItems);
    }
  }, [data, isLoading, error]);

  return (
    <section className={classes.bookList}>
      {isLoading ? (
        <div className={classes.loader}>
          <Loader />
        </div>
      ) : !isLoading && !error ? (
        data?.items.map((book) => <BookItem key={book.id} book={book} />)
      ) : (
        ""
      )}
    </section>
  );
};

export default BookList;
