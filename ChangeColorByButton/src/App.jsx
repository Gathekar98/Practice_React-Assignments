import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [color, setColor] = useState("RED");

  const ChangeColor = () => {
    setColor("BLUE");
    
  };
const colorChange = color === "RED" ? "red" : "blue";
  return (
    <>
      <h3>
        My Favourite colour is <b className={colorChange}>{color}</b>
      </h3>
      <button className="btn btn-primary" onClick={ChangeColor}>
        BLUE
      </button>
    </>
  );
}

export default App;
