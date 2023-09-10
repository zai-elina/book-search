import React, { useState } from "react";
import classes from "./MainPage.module.css";
import Form from "../../components/form/Form";
import Filters from "../../components/filters/Filters";
import CountOfSearch from "../../components/countOfSearch/CountOfSearch";
import BookList from "../../components/bookList/BookList";

const MainPage = () => {
  const [queryTerm, setQueryTerm] = useState(false);

  return (
    <main className={classes.mainBlock}>
      <Form setQueryTerm={setQueryTerm} />
      <Filters />
      <CountOfSearch />
      {queryTerm && <BookList queryTerm={queryTerm} />}
    </main>
  );
};

export default MainPage;
