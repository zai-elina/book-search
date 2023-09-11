import React from "react";
import classes from "./Select.module.css";
import { useDispatch } from "react-redux";
import {
  changeCategory,
  changeSorting,
} from "../../../store/slices/dataSlices";

const Select = ({ list, isCategory, setQueryTerm }) => {
  const dispatch = useDispatch();

  const onChangeSelect = (e) => {
    setQueryTerm(true);
    const value = e.target.value;
    isCategory
      ? dispatch(changeCategory(value))
      : dispatch(changeSorting(value));
  };

  return (
    <select className={classes.select} onChange={(e) => onChangeSelect(e)}>
      {list.map((option) => (
        <option value={option.name} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
