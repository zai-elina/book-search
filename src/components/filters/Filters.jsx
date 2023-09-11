import React from "react";
import Select from "./select/Select";
import classes from "./Filters.module.css";

const Filters = ({ setQueryTerm }) => {
  const filterCategory = [
    { id: 0, name: "all" },
    { id: 1, name: "art" },
    { id: 2, name: "biography" },
    { id: 3, name: "computers" },
    { id: 4, name: "history" },
    { id: 5, name: "medical" },
    { id: 6, name: "poetry" },
  ];
  const filterSorting = [
    { id: 0, name: "relevance" },
    { id: 1, name: "newest" },
  ];

  return (
    <div className={classes.filters}>
      <div className={classes.filter}>
        <p className={classes.filterName}>Category:</p>
        <Select
          isCategory={true}
          list={filterCategory}
          setQueryTerm={setQueryTerm}
        />
      </div>
      <div className={classes.filter}>
        <p className={classes.filterName}>Sorting by:</p>
        <Select list={filterSorting} setQueryTerm={setQueryTerm} />
      </div>
    </div>
  );
};

export default Filters;
