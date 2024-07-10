import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("n");
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      setName((name) => name + "n");
    }, 2000);
  }, [count, name]);

  return (
    <>
      <h1>
        Count : {count} {name}
      </h1>
    </>
  );
}

export default App;
