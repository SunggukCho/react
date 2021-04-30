import './App.css';
import WidthPrinter from './WidthPrinter';
import React, {useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function onClick(){
    setCount(count+1);
  }
  return (
    <>
      {count === 0 && <WidthPrinter />}
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </>
  )
}

export default App;
