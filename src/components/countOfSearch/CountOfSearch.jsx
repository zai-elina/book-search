import React from "react";
import classes from "./CountOfSearch.module.css";
import { useSelector } from "react-redux";
import {
  countOfBookSelector,
  isLoadingDataSelector,
} from "../../store/selectors/dataSelector";

const CountOfSearch = () => {
  const count = useSelector(countOfBookSelector);
  const isLoadingData = useSelector(isLoadingDataSelector);

  return (
    <div className={classes.countOfSearch}>
      Found {isLoadingData ? 0 : count} results
    </div>
  );
};

export default CountOfSearch;
