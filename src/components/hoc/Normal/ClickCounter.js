import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      ClickCounter
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  );
};

export default ClickCounter;
