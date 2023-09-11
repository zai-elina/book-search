import React, { useEffect } from "react";
import classes from "./BookPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { bookByIDSelector } from "../../store/selectors/dataSelector";
import { useSelector } from "react-redux";

const BookPage = () => {
  const { id } = useParams();
  const book = useSelector((state) => bookByIDSelector(state, id));
  const { imageLinks, categories, title, authors, description } =
    book.volumeInfo;
  const navigate = useNavigate();

  useEffect(() => {
    if (!book) navigate("/");
  }, [book]);

  return (
    <section className={classes.bookInformation}>
      <div className={classes.bookImgContainer}>
        {imageLinks ? (
          <img
            src={imageLinks.thumbnail}
            alt={title}
            className={classes.bookImg}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className={classes.bookDescription}>
        <div className={classes.bookCategory}>{categories}</div>
        <div className={classes.bookName}>{title}</div>
        <div className={classes.bookAuthor}>{authors}</div>
        <div className={classes.bookAbout}>{description}</div>
      </div>
    </section>
  );
};

export default BookPage;
