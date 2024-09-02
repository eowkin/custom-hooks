import { useState } from "react";

export const useCounter = (initValue = 10) => {
  const [counter, setCounter] = useState(initValue);

  const incrementar = (value = 1) => {
    setCounter((current) => current + value);
  };

  const decrementar = (value = 1) => {
    setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(initValue);
  };

  return {
    counter,
    incrementar,
    decrementar,
    reset,
  };
};
