import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useRef } from "react";

function App() {
  const inputElement = useRef();

  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background = "pink";
    console.log(inputElement.current.value);
  };

  return (
    <>
      <input type="text" ref={inputElement}></input>
      <button className="btn btn-primary m-2 p-1 " onClick={btnClicked}>
        Click Here
      </button>
    </>
  );
}

export default App;
