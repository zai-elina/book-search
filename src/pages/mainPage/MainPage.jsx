import React, { useState } from "react";
import classes from "./MainPage.module.css";
import Form from "../../components/form/Form";
import Filters from "../../components/filters/Filters";
import CountOfSearch from "../../components/countOfSearch/CountOfSearch";
import BookList from "../../components/bookList/BookList";

const MainPage = () => {
  const [queryTerm, setQueryTerm] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <main className={classes.mainBlock}>
      <Form setQueryTerm={setQueryTerm} />
      <Filters setQueryTerm={setQueryTerm} />
      <CountOfSearch totalItems={totalItems}/>
      {queryTerm && <BookList queryTerm={queryTerm} setTotalItems={setTotalItems}/>}
    </main>
  );
};

export default MainPage;
