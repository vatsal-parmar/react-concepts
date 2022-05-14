import React, { useContext } from 'react';
import { FirstContext } from '../../App';

const ComponentD = () => {
  const first = useContext(FirstContext);
  return <div>ComponentD {first}</div>;
};

export default ComponentD;
