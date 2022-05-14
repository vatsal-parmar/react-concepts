import React from 'react';
import { FirstContext } from '../../App';
import ComponentD from './ComponentD';

const ComponentC = () => {
  return (
    <FirstContext.Consumer>
      {(first) => (
        <div>
          ComponentC {first}
          {/* <ComponentD /> */}
        </div>
      )}
    </FirstContext.Consumer>
  );
};

export default ComponentC;
