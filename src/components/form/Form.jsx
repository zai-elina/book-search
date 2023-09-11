import React, { useEffect, useState } from "react";
import Input from "./input/Input";
import ButtonSubmit from "./buttonSubmit/ButtonSubmit";
import { useDispatch } from "react-redux";
import { setSearchInput, setTotalItems } from "../../store/slices/dataSlices";

const Form = ({ setQueryTerm }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(setSearchInput({ input }));
    setQueryTerm(true);
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <Input setInput={setInput} />
      <ButtonSubmit />
    </form>
  );
};

export default Form;
