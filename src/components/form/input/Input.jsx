import React from "react";
import classes from "./Input.module.css";

const Input = ({ inputValue, setInputValue }) => {
  return (
    <input
      type="search"
      className={classes.input}
      placeholder="Name, author"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    ></input>
  );
};

export default Input;
