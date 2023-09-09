import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink to='/'>
        <div className={classes.navbarLink}>BOOKS</div>
      </NavLink>
    </div>
  );
};

export default NavBar;
