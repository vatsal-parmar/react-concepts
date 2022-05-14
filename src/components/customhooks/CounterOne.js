import React, { useState } from 'react';

const CounterOne = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decerement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>CounterOne - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decerement}>Decerement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterOne;
