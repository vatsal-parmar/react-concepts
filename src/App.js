import './App.css';
import React from 'react';
// import LifecycleA from './components/lifecycle/LifecycleA';
// import ClickCounter from './components/hoc/Normal/ClickCounter';
// import HoverCounter from './components/hoc/Normal/HoverCounter';
// import NewClickCounter from './components/hoc/WithHoc/ClickCounter';
// import NewHoverCounter from './components/hoc/WithHoc/HoverCounter';
// import { ComponentA } from './components/context/ComponentA';
// import { DocOne } from './components/customhooks/DocOne';
// import { DocTwo } from './components/customhooks/DocTwo';
// import CounterOne from './components/customhooks/CounterOne';
// import CounterTwo from './components/customhooks/CounterTwo';
import CounterOne from './components/reducer/CounterOne';
import CounterTwo from './components/reducer/CounterTwo';
import CounterThree from './components/reducer/CounterThree';
import ParentComponent from './components/usecallback/ParentComponent';
import Counter from './components/usememo/Counter';
import FocusedInput from './components/useref/FocusedInput';

export const FirstContext = React.createContext();

function App() {
  return (
    <div className="App">
      React basics
      {/* component life cycle */}
      {/* <LifecycleA /> */}
      {/* hoc */}
      {/* normal counters */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* counters with hoc */}
      {/* <NewClickCounter /> */}
      {/* <NewHoverCounter /> */}
      {/* Context */}
      {/* <FirstContext.Provider value={'Batman'}>
        <ComponentA />
      </FirstContext.Provider> */}
      {/* CustomHooks */}
      {/* <DocOne /> */}
      {/* <DocTwo /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* useReducer */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* useCallBack */}
      <ParentComponent />
      {/* useMemo */}
      {/* <Counter /> */}
      {/* useRef */}
      {/* <FocusedInput /> */}
    </div>
  );
}

export default App;
