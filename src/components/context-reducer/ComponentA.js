import React, { useContext } from 'react';
import { CountContext } from '../../App';

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentA - {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment From A
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Decrement From A
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>
        Reset From A
      </button>
    </div>
  );
};

export default ComponentA;
