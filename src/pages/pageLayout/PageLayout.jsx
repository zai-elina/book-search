import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./PageLayout.module.css";
import NavBar from "../../components/layout/navigation/NavBar/NavBar";
import Footer from "../../components/layout/footer/Footer";

const PageLayout = () => {
  return (
    <div className={classes.container}>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default PageLayout;
