import { useState } from "react";
import "./App.css";

function App() {
  const [car, setCar] = useState({
    brand: "Ferrari",
    color: "Red",
    modal: "Roma",
    year: "2023",
  });

  const changeColor = () => {
    setCar((car) => {
      return { ...car, color: "Blue"};
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>
        It is {car.color} {car.modal} from {car.year}
      </h2>
      <button onClick={changeColor}>Blue</button>
    </>
  );
}

export default App;
