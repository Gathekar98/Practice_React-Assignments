import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function numCube(num) {
    console.log("cube getting...");
    return Math.pow(num, 3);
  }

  const result = useMemo(()=> numCube(number), [number]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>Cube of number : {result}</h2>

      <button
        className="btn btn-warning m-2"
        onClick={() => setCounter(counter + 1)}
      >
        Counter++
      </button>
      <h2>Counter : {counter} </h2>
    </>
  );
}

export default App;
