import React, { useState } from "react";
import Select from "./select/Select";
import classes from "./Filters.module.css";
import { useSelector } from "react-redux";
import {
  categorySelector,
  sortingSelector,
} from "../../store/selectors/dataSelector";
import { categories, sortingValue } from "../../constant";

const Filters = () => {
  const category = useSelector(categorySelector);
  const sorting = useSelector(sortingSelector);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedSorting, setSelectedSorting] = useState(sorting);
  const filterCategory = [...categories];
  const filterSorting = [...sortingValue]

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
