import {useState} from 'react'
import './App.css';
import Next from './Next'

function App() {
  const [count, setCount]=useState(42)
  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="card">
        <button type="button" onClick={()=>setCount((previous)=>previous+3)}>+</button>
        <p>{count}</p>
        <button type="button" onClick={()=>setCount((previous)=>previous-3)}>-</button>
      </div>
<Next/>

    </div>
  );
}

export default App;
