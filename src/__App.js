import './App.css';
import React, { useReducer } from 'react';
import ComponentA from './components/context-reducer/ComponentA';
import ComponentB from './components/context-reducer/ComponentB';
import ComponentC from './components/context-reducer/ComponentC';
import DataFetchingOne from './components/data-fetching/DataFetchingOne';
import DataFetchingTwo from './components/data-fetching/DataFetchingTwo';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Reducer With Context
        <p>Count - {count}</p>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>

    // <div>
    //   <DataFetchingOne />
    //   <DataFetchingTwo />
    // </div>
  );
}

export default App;
