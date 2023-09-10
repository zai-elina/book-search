import React from "react";
import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";

const BookItem = ({ book }) => {
  const { id } = book;
  const { imageLinks, categories, title, authors } = book.volumeInfo;
  console.log(imageLinks);
  return (
    <Link to={`/book/${id}`}>
      <div className={classes.bookContainer}>
        {imageLinks ? (
          <img
            src={imageLinks.thumbnail}
            alt={title}
            className={classes.imgBook}
          />
        ) : (
          <div className={classes.imgContainer}>
            <p className={classes.bookName}>{title}</p>
          </div>
        )}
        <p className={classes.category}>{categories ? categories : "-"}</p>
        <p className={classes.bookName}>{title ? title : "-"}</p>
        <p className={classes.bookAuthor}>
          {authors?.length !== 0 && authors
            ? authors.join(", ").slice(0, authors.length - 2)
            : "-"}
        </p>
      </div>
    </Link>
  );
};

export default BookItem;
