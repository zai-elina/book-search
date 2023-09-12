import React, { useEffect } from "react";
import classes from "./BookPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { selectedBookSelector } from "../../store/selectors/dataSelector";
import { useSelector } from "react-redux";

const BookPage = () => {
  const book = useSelector(selectedBookSelector);
  const { imageLinks, categories, title, authors, description } =
    book.volumeInfo;
  const navigate = useNavigate();

  useEffect(() => {
    if (!book) {
      navigate("/");
    }
    window.scrollTo({ top: 0 });
  }, [book]);

  return (
    <>
      <Link to="/" className={classes.linkBack}>
        Back
      </Link>
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
          <div className={classes.bookCategory}>
            {categories?.length !== 0 && categories
              ? categories.join(", ")
              : "-"}
          </div>
          <div className={classes.bookName}>{title ? title : "-"}</div>
          <div className={classes.bookAuthor}>
            {authors?.length !== 0 && authors ? authors.join(", ") : "-"}
          </div>
          <div className={classes.bookAbout}>
            {description ? description : "-"}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookPage;
