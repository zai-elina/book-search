import React from "react";
import classes from "./Select.module.css";

const Select = ({ list }) => {
  return (
      <select className={classes.select}>
        {list.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
  );
};

export default Select;
