import React from "react";
import classes from "./Input.module.css";

const Input = ({ setInput }) => {
  return (
    <input
      type="search"
      className={classes.input}
      placeholder="Name, author"
      onChange={(e) => setInput(e.target.value)}
    ></input>
  );
};

export default Input;
