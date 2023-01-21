import {useState} from 'react'
import './App.css';
import Next from './Next';
import M from './M'

function App() {
  const [count, setCount]=useState(42)
  return (
    <div className="App">
      <h1 className='counter'>Counter</h1>
      <div className="card">
        <button type="button" className="incre" onClick={()=>setCount((previous)=>previous+3)}>+</button>
        <p className='count'>{count}</p>
        <button type="button" className="incre" onClick={()=>setCount((previous)=>previous-3)}>-</button>
      </div>
<Next/>
<M/>

    </div>
  );
}

export default App;
