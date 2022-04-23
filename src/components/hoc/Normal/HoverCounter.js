import React, { useState } from 'react';

const HoverCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return <div onMouseOver={incrementCount}>Hover {count} times</div>;
};

export default HoverCounter;
