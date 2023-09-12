import React from "react";
import classes from "./Select.module.css";
import { useDispatch } from "react-redux";
import {
  changeCategory,
  changeSorting,
  clearBookList,
  setIsLoadingData,
} from "../../../store/slices/dataSlices";

const Select = ({ list, isCategory, changeValue, value }) => {
  const dispatch = useDispatch();

  const onChangeSelect = (e) => {
    dispatch(setIsLoadingData(true));

    const value = e.target.value;

    isCategory
      ? dispatch(changeCategory(value))
      : dispatch(changeSorting(value));

    dispatch(clearBookList());
    dispatch(setIsLoadingData(true));
    changeValue(value);
  };

  return (
    <select
      className={classes.select}
      onChange={(e) => onChangeSelect(e)}
      value={value}
    >
      {list.map((option) => (
        <option value={option.name} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
