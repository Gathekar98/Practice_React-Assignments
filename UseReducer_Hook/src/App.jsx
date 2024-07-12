// import { useState } from 'react'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from "react";

function App() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload}
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button className="btn btn-primary m-2" onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button className="btn btn-secondary m-2" onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <input className="form-control" value={state.count} onChange={(e)=>dispatch({type :"input" , payload : Number(e.target.value)})} type="number"/>
    </>
  );
}

export default App;
