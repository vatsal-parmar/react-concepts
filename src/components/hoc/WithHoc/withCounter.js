import React, { useState } from 'react';

const withCounter = (WrappedComponent) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevState) => prevState + 1);
    };

    return <WrappedComponent count={count} incrementCount={incrementCount} />;
  };

  return WithCounter;
};

export default withCounter;
