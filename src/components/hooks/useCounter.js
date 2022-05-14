import { useState } from 'react';

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decerement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increment, decerement, reset];
};

export default useCounter;
