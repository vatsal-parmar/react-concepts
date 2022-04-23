import React, { useState } from 'react';
import withCounter from './withCounter';

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      ClickCounter
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  );
};

export default withCounter(ClickCounter);
