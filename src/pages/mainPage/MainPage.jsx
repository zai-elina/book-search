import React, { useEffect, useState } from "react";
import classes from "./MainPage.module.css";
import Form from "../../components/form/Form";
import Filters from "../../components/filters/Filters";
import CountOfSearch from "../../components/countOfSearch/CountOfSearch";
import BookList from "../../components/bookList/BookList";
import { Loader } from "../../components/layout/loader/Loader";
import { Button } from "../../components/form/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { incrementStartIndex } from "../../store/slices/dataSlices";
import {
  bookListSelector,
  searchInputSelector,
} from "../../store/selectors/dataSelector";

const MainPage = () => {
  const [queryTerm, setQueryTerm] = useState(false);
  const [isLoadingMoreBook, setIsLoadingMoreBook] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector(bookListSelector);
  const maxCountBook = 30;
  const searchInput = useSelector(searchInputSelector);

  const handleLoadMore = () => {
    setIsLoadingMoreBook(true);
    setQueryTerm(true);
    dispatch(incrementStartIndex(maxCountBook));
    setTimeout(() => setIsLoadingMoreBook(false), 2000);
  };

  return (
    <main className={classes.mainBlock}>
      <Form setQueryTerm={setQueryTerm} />
      <Filters setQueryTerm={setQueryTerm} />
      <CountOfSearch />
      {searchInput && (
        <BookList queryTerm={queryTerm} setQueryTerm={setQueryTerm} />
      )}
      {isLoadingMoreBook && (
        <div className={classes.loader}>
          <Loader />
        </div>
      )}
      {!isLoadingMoreBook && books.length !== 0 && (
        <Button buttonOnClick={handleLoadMore}>Загрузить еще</Button>
      )}
    </main>
  );
};

export default MainPage;
