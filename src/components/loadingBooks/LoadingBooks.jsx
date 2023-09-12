import React, { useEffect } from "react";
import classes from "./LoadingBooks.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  categorySelector,
  isLoadingDataSelector,
  searchInputSelector,
  sortingSelector,
  startIndexSelector,
} from "../../store/selectors/dataSelector";
import { useGetBooksQuery } from "../../services/bookService";
import {
  setBookList,
  setCountOfBook,
  setIsLoadingData,
} from "../../store/slices/dataSlices";
import { Loader } from "../layout/loader/Loader";

const LoadingBooks = () => {
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
  const dispatch = useDispatch();
  const isLoadingData = useSelector(isLoadingDataSelector);

  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setBookList(data.items));
      if (startIndex === 0) {
        dispatch(setCountOfBook(data.totalItems));
      }
      dispatch(setIsLoadingData(false));
    }
    if (error) {
      dispatch(setIsLoadingData(false));
      console.error("Ошибка выполнения запроса:", error);
      alert("Произошла ошибка при загрузке данных");
    }
  }, [data, isLoading, error, searchInput]);

  return (
    <>
      {isLoadingData || isLoading ? (
        <div className={classes.loader}>
          <Loader />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingBooks;
