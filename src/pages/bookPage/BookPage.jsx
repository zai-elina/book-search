import React from "react";
import classes from "./BookPage.module.css";

const BookPage = ({ book }) => {
  const { id, imgUrl, category, name, author, description } = book;
  return (
    <section className={classes.bookInformation}>
      <div className={classes.bookImg}>
        {imgUrl ? <img src={imgUrl} alt="" /> : <div></div>}
      </div>
      <div className={classes.bookDescription}>
        <div className={classes.bookCategory}>{category}</div>
        <div className={classes.bookName}>{name}</div>
        <div className={classes.bookAuthor}>{author}</div>
        <div className={classes.bookAbout}>{description}</div>
      </div>
    </section>
  );
};

export default BookPage;
