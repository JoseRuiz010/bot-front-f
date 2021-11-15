import { useState } from "react";

export const useFormHook = (initialState = {}) => {
  const [form, setform] = useState(initialState);

  const handleForm = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setform(initialState);
  };

  return { form, handleForm, reset };
};
