import React, { useState } from "react";
import Input from "./input/Input";
import { ButtonSubmit } from "./button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBookList,
  setIsLoadingData,
  setSearchInput,
} from "../../store/slices/dataSlices";
import { searchInputSelector } from "../../store/selectors/dataSelector";

const Form = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector(searchInputSelector);
  const [inputValue, setInputValue] = useState(searchInput);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(clearBookList([]));
    dispatch(setIsLoadingData(true));
    dispatch(setSearchInput(inputValue));
  };

  return (
    <form onSubmit={(e) => submitForm(e)} id="submit-form">
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <ButtonSubmit>Найти</ButtonSubmit>
    </form>
  );
};

export default Form;
