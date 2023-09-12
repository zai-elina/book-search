import React, { useEffect, useState } from "react";
import classes from "./MainPage.module.css";
import Form from "../../components/form/Form";
import Filters from "../../components/filters/Filters";
import CountOfSearch from "../../components/countOfSearch/CountOfSearch";
import BookList from "../../components/bookList/BookList";
import { Loader } from "../../components/layout/loader/Loader";
import { Button } from "../../components/form/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementStartIndex,
  setIsLoadingData,
} from "../../store/slices/dataSlices";
import {
  bookListSelector,
  isLoadingDataSelector,
  searchInputSelector,
} from "../../store/selectors/dataSelector";
import LoadingBooks from "../../components/loadingBooks/LoadingBooks";

const MainPage = () => {
  const dispatch = useDispatch();
  const books = useSelector(bookListSelector);
  const maxCountBook = 30;
  const searchInput = useSelector(searchInputSelector);
  const isLoadingData = useSelector(isLoadingDataSelector);

  const handleLoadMore = () => {
    dispatch(incrementStartIndex(maxCountBook));
    dispatch(setIsLoadingData(true));
  };

  return (
    <main className={classes.mainBlock}>
      <Form />

      <Filters />

      <CountOfSearch />

      {searchInput && <BookList />}

      {!isLoadingData && books.length !== 0 && (
        <Button buttonOnClick={handleLoadMore}>Загрузить еще</Button>
      )}

      {isLoadingData && <LoadingBooks />}
    </main>
  );
};

export default MainPage;
