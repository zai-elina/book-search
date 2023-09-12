import React from "react";
import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";
import { useDispatch } from "react-redux";
import { selectNewBook } from "../../../store/slices/dataSlices";

const BookItem = ({ book }) => {
  const { id } = book;
  const { imageLinks, categories, title, authors } = book.volumeInfo;
  const dispatch = useDispatch();

  const changeSelectedBook = () => {
    dispatch(selectNewBook(book));
  };

  return (
    <Link to={`/book/${id}`} onClick={() => changeSelectedBook()}>
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
        <p className={classes.category}>{categories ? categories[0] : "-"}</p>
        <p className={classes.bookName}>{title ? title : "-"}</p>
        <p className={classes.bookAuthor}>
          {authors?.length !== 0 && authors ? authors.join(", ") : "-"}
        </p>
      </div>
    </Link>
  );
};

export default BookItem;
