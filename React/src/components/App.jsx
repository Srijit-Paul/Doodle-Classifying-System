import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";

function App() {
  const [state, setState] = useState({ current: "Home" });
  function goBack() {
    let newState = state;
    if (state.current === "PT") {
      newState.current = "Home";
    } else if (state.current === "Practice" || state.current === "Test") {
      newState.current = "PT";
    }
    setState(newState);
  }
  return (
    <div>
      <Header goBack={goBack} />
      {/* <Body current={state.current} /> */}
    </div>
  );
}

export default App;
