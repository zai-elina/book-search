import classes from "./BookList.module.css";
import BookItem from "./bookItem/BookItem";
import {
  bookListSelector,
  isLoadingDataSelector,
} from "../../store/selectors/dataSelector";
import { useSelector } from "react-redux";

const BookList = () => {
  const books = useSelector(bookListSelector);
  const isLoadingData = useSelector(isLoadingDataSelector);

  return (
    <section className={classes.bookList}>
      {books &&
        books.map((book) => <BookItem key={book.id + book.etag} book={book} />)}
      {(!books || books?.length) === 0 && !isLoadingData && (
        <div className={classes.notFound}>Ничего не найдено</div>
      )}
    </section>
  );
};

export default BookList;
