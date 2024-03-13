import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  
const addValue=()=>{
  setCount(count+1);
  console.log("added value",Math.random());
}
const subValue=()=>{
 
  setCount(count-1);
  }
  const removeValue=()=>{
    setCount(count-count);
  }
const addByValue=()=>{
  setCount(count+10);
}
  return (
    
    <div className='content'>
    <h1 >React using Vite | AK</h1>
    <h2>Counter App = {count}</h2>
    <button onClick={addValue}>ADD VALUE</button>
    <br />
    <button onClick={subValue}>DECREASE VALUE</button>
    <button onClick={removeValue}>Remove VALUE</button>
    <button onClick={addByValue}>ADD by 10</button>

    </div>
    
  )
}

export default App
