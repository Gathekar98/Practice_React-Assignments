import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const newFunc = useCallback(()=>{}, [])

  return (
    <>
    <Header newFunc = {newFunc}/>
    <h1>{count}</h1>
    <button onClick={()=> setCount(prev => prev+1)}>Click Here</button>
    </>
  )
}
  
export default App;
