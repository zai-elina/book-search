import React from "react";
import classes from "./CountOfSearch.module.css";

const CountOfSearch = ({ totalItems }) => {
  return (
    <div className={classes.countOfSearch}>Found {totalItems} results</div>
  );
};

export default CountOfSearch;
