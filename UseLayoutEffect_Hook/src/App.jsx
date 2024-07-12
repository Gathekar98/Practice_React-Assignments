
import "./App.css";
import { useEffect, useLayoutEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Message from useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  }, []);

  return (
    <>
      <p>this dom will execute after UseLayoutEffect hook</p>
      {Array(30000)
        .fill("")
        .map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </>
  );
}

export default App;
