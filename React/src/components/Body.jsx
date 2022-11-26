import React from "react";
import Practice from "./Practice";
import Test from "./Test";
import PT from "./PT";
import Home from "./Home";
//home, practice-test, prac/text

function Body(props) {
  if (props.current === "PT") {
    return <PT />;
  } else if (props.current === "Practice") {
    return <Practice />;
  } else if (props.current === "Test") {
    return <Test />;
  } else {
    return <Home />;
  }
}

export default Body;
