import React from "react";
import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";

const BookItem = ({ book }) => {
  const { id, imgUrl, category, name, author } = book;
  return (
    <Link to={`/book/${id}`}>
      <div className={classes.bookContainer}>
        {imgUrl ? (
          <img src={imgUrl} alt={name} />
        ) : (
          <div className={classes.imgContainer}>
            <p className={classes.bookName}>{name}</p>
          </div>
        )}
        <p className={classes.category}>{category}</p>
        <p className={classes.bookName}>{name}</p>
        <p className={classes.bookAuthor}>{author}</p>
      </div>
    </Link>
  );
};

export default BookItem;
