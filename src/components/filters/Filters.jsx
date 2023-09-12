import React, { useState } from "react";
import Select from "./select/Select";
import classes from "./Filters.module.css";
import { useSelector } from "react-redux";
import {
  categorySelector,
  sortingSelector,
} from "../../store/selectors/dataSelector";

const Filters = () => {
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
  const category = useSelector(categorySelector);
  const sorting = useSelector(sortingSelector);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedSorting, setSelectedSorting] = useState(sorting);

  return (
    <div className={classes.filters}>
      <div className={classes.filter}>
        <p className={classes.filterName}>Category:</p>
        <Select
          isCategory={true}
          list={filterCategory}
          changeValue={setSelectedCategory}
          value={selectedCategory}
        />
      </div>
      <div className={classes.filter}>
        <p className={classes.filterName}>Sorting by:</p>
        <Select
          list={filterSorting}
          changeValue={setSelectedSorting}
          value={selectedSorting}
        />
      </div>
    </div>
  );
};

export default Filters;
