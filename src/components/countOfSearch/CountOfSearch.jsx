import React from "react";
import classes from "./CountOfSearch.module.css";
import { useSelector } from "react-redux";
import { countOfBookSelector } from "../../store/selectors/dataSelector";

const CountOfSearch = () => {
  const count = useSelector(countOfBookSelector);
  return <div className={classes.countOfSearch}>Found {count} results</div>;
};

export default CountOfSearch;
