import './App.css';
import LifecycleA from './components/lifecycle/LifecycleA';
import ClickCounter from './components/hoc/Normal/ClickCounter';
import HoverCounter from './components/hoc/Normal/HoverCounter';
import NewClickCounter from './components/hoc/WithHoc/ClickCounter';
import NewHoverCounter from './components/hoc/WithHoc/HoverCounter';

function App() {
  return (
    <div className="App">
      React basics
      {/* component life cycle */}
      {/* <LifecycleA /> */}
      {/* hoc */}
      {/* normal counters */}
      <ClickCounter />
      <HoverCounter />
      {/* counters with hoc */}
      {/* <NewClickCounter /> */}
      {/* <NewHoverCounter /> */}
    </div>
  );
}

export default App;
