import React from "react";
import classes from "./CountOfSearch.module.css";
import { useSelector } from "react-redux";
import { totalItemsSelector } from "../../store/selectors/dataSelector";

const CountOfSearch = () => {
  const totalItems = useSelector(totalItemsSelector);
  return (
    <div className={classes.countOfSearch}>Found {totalItems} results</div>
  );
};

export default CountOfSearch;
