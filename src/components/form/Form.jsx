import React, { useEffect, useState } from "react";
import Input from "./input/Input";
import { ButtonSubmit } from "./button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput, setTotalItems } from "../../store/slices/dataSlices";
import { searchInputSelector } from "../../store/selectors/dataSelector";

const Form = ({ setQueryTerm }) => {
  const dispatch = useDispatch();
  const searchInput = useSelector(searchInputSelector);
  const [inputValue, setInputValue] = useState(searchInput);

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(setSearchInput(inputValue));
    setQueryTerm(true);
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <ButtonSubmit>Найти</ButtonSubmit>
    </form>
  );
};

export default Form;
