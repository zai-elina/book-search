import React from "react";
import classes from "./BookList.module.css";
import BookItem from "./bookItem/BookItem";

const BookList = ({ data }) => {
  return (
    <section className={classes.bookList}>
      {data.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BookList;
