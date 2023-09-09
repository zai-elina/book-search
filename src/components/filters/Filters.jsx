import React from "react";
import Select from "./select/Select";
import classes from "./Filters.module.css";

const Filters = () => {
  const filter1 = [
    { id: 0, name: "Исскуство" },
    { id: 1, name: "Поэзия" },
    { id: 2, name: "Ужасы" },
    { id: 3, name: "Психология" },
  ];
  const filter2 = [
    { id: 0, name: "Релевантности" },
    { id: 1, name: "Новизне" },
  ];

  return (
    <div className={classes.filters}>
      <div className={classes.filter}>
        <p className={classes.filterName}>Категории:</p>
        <Select list={filter1} />
      </div>
      <div className={classes.filter}>
        <p className={classes.filterName}>Сортировать по:</p>
        <Select list={filter2} />
      </div>
    </div>
  );
};

export default Filters;
