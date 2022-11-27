import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Menu from "./Menu";

function App() {
  const [state, setState] = useState({ current: "Home" , exercise: "", mode:""});
  function goBack() {
    console.log(state)
    let newState = state;
    console.log(state);
    if (state.current === "Practice" || state.current === "Test") {
      newState= { current: "Menu" , exercise: state.exercise, mode: ""};
    } else if(state.current === "Menu"){
      newState= { current: "Home" , exercise: "", mode: ""};
    }
    setState(newState);
  }
  console.log(state)
  return (
    <div>
      <Header goBack={goBack} />
      <Body state={state} setState={setState}/>
    </div>
  );
}

export default App;
