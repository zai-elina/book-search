import React from "react";
import classes from "./MainPage.module.css";
import Form from "../../components/form/Form";
import Filters from "../../components/filters/Filters";
import CountOfSearch from "../../components/countOfSearch/CountOfSearch";
import BookList from "../../components/bookList/BookList";

const MainPage = () => {
  const books = [
    {
      id: 0,
      imgUrl: "",
      category: "Психология",
      name: "Мастер",
      author: "Тим Фудурле",
    },
    {
      id: 1,
      imgUrl: "",
      category: "Психология",
      name: "Мастер",
      author: "Тим Фудурле",
    },
    {
      id: 2,
      imgUrl: "",
      category: "Психология",
      name: "Мастер",
      author: "Тим Фудурле",
    },
    {
      id: 3,
      imgUrl: "",
      category: "Психология",
      name: "Мастер",
      author: "Тим Фудурле",
    },
    {
      id: 4,
      imgUrl: "",
      category: "Психология",
      name: "Мастер",
      author: "Тим Фудурле",
    },
    {
      id: 5,
      imgUrl: "",
      category: "Психология",
      name: "Мастерjsdfbkjghksjrtjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
      author: "Тим Фудурле",
    },
    {
      id: 6,
      imgUrl: "",
      category: "Психология",
      name: "Мастер",
      author: "Тим Фудурле",
    },
  ];
  return (
    <main className={classes.mainBlock}>
      <Form />
      <Filters />
      <CountOfSearch />
      <BookList data={books} />
    </main>
  );
};

export default MainPage;
