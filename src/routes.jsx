import React from "react";
import PageLayout from "./pages/pageLayout/PageLayout";
import { Route, Routes } from "react-router-dom";
import BooksList from "./pages/booksList/BooksList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<BooksList />} />
        {/* <Route path="/book/:id" element={</>}  /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
