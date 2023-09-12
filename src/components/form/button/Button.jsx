import React from "react";
import classes from "./Button.module.css";

export const Button = ({ children, buttonOnClick }) => {
  return (
    <button
      style={{ marginBottom: "30px" }}
      onClick={() => buttonOnClick()}
      className={classes.button}
    >
      {children}
    </button>
  );
};

export const ButtonSubmit = ({ children }) => {
  return (
    <button type="submit" className={classes.button}>
      {children}
    </button>
  );
};
