import React, { useState } from 'react';
import withCounter from './withCounter';

const HoverCounter = ({ count, incrementCount }) => {
  return <div onMouseOver={incrementCount}>Hover {count} times</div>;
};

export default withCounter(HoverCounter);
