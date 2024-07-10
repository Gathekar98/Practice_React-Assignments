
import { useEffect, useRef, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
const [value, setValue] = useState(0);
 const count = useRef(0);

 useEffect(()=>{
count.current = count.current + 1;
 });

  return (
    <>
      <button className='btn btn-success' onClick={()=> setValue(num => num+1)}>+1</button>
      <h3>{value}</h3>
      <button className='btn btn-danger' onClick={()=> setValue(num => num-1)}>-1</button>
      <h2>Render Count : {count.current}</h2>
    </>
  )
}

export default App;
