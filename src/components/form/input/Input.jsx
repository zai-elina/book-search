import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <input
      className={classes.input}
      placeholder="Название книги или автора"
    ></input>
  );
};

export default Input;
