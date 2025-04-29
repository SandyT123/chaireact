import { useState } from 'react';
import './App.css';

function App() {
  const [counters, setCounter] = useState(0);
  const AddValue = () => {
    counters < 20 ?  setCounter(counters + 1) : setCounter(20)
  }
  const RemoveValue = () => {
    counters > 0 ?  setCounter(counters - 1) : setCounter(0)
  }
  return (
    <>
      <h1>Welcome to the project</h1>
      <h2> Counter : {counters}</h2>
      <button onClick={AddValue}>Add value : {counters}</button>
      <br />
      <button onClick={RemoveValue}>Remove value : {counters}</button>
    </>
  )
}

export default App;
