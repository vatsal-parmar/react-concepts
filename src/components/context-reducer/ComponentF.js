import React, { useContext } from 'react';
import { CountContext } from '../../App';

const ComponentF = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentF - {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment From F
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Decrement From F
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>
        Reset From F
      </button>
    </div>
  );
};

export default ComponentF;
