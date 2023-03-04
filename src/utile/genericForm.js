import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

function useGenericForm(initialState) {
  let state = initialState;
  const [formState, setFormState] = useState(initialState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit() {
    if (!formState.id) formState.id = nanoid();
  }
  function reset() {
    setFormState(state);
  }
  return [formState, handleInputChange, handleSubmit, reset];
}

export default useGenericForm;
