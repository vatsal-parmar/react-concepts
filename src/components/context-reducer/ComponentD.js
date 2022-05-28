import React, { useContext } from 'react';
import { CountContext } from '../../App';

const ComponentD = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentD - {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment From D
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Decrement From D
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>
        Reset From D
      </button>
    </div>
  );
};

export default ComponentD;
