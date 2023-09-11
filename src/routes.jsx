import React from "react";
import PageLayout from "./pages/pageLayout/PageLayout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import BookPage from "./pages/bookPage/BookPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
