import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterTwo = () => {
  const [count, increment, decerement, reset] = useCounter();
  return (
    <div>
      <h1>CounterOne - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decerement}>Decerement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterTwo;
