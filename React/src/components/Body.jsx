import React from "react";
import Practice from "./Practice";
import Test from "./Test";
import Home from "./Home";
import Menu from "./Menu";
import { useState } from "react";
//home, practice-test, prac/text

function Body(props) {
  function onClick(event){
    console.log(event.target.value);
    var e=event.target.value;
    var i=e.indexOf("-");
    var exercise=e.slice(0,i);
    var mode=e.slice(i+1,);
    props.setState({ current: "Menu" , exercise: exercise, mode:mode});
  }
  function openEx(event){
    console.log(event.target.value);
    var i=event.target.value;
    console.log(props.state);
    props.setState({ current: props.state.mode , exercise: props.state.exercise, mode: props.state.mode, i:i});
  }
  console.log(props.state);
  if (props.state.current === "Menu") {
    return (<Menu state={props.state} openEx={openEx}/>);
  } else if (props.state.current === "Practice") {
    return (<Practice state={props.state}/>);
  } else if (props.state.current === "Test") {
    return (<Test state={props.state}/>);
  } else {
    return <Home onClick={onClick}/>;
  }
}

export default Body;
