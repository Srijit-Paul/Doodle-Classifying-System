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
    console.log(event,props.state);
    var i=event.target.value;
    props.setState({ current: props.state.mode , exercise: props.state.exercise, mode: props.state.mode, i:i});
  }
  
  function currentBody(){
    if (props.state.current === "Menu") {
      return (<div style={{marginTop:"10vh", padding:"10px", height:"100%"}}><Menu state={props.state} openEx={openEx}/></div>);
    } else if (props.state.current === "Practice") {
      return (<div style={{marginTop:"10vh", padding:"10px"}}><Practice state={props.state}/></div>);
    } else if (props.state.current === "Test") {
      return (<div style={{marginTop:"10vh", padding:"10px"}}><Test state={props.state}/></div>);
    } else {
      return <div style={{marginTop:"10vh", padding:"10px"}}><Home onClick={onClick}/></div>;
    }
  }

  return(
    <div>
      <div style={{marginTop:"10vh", height:"100%"}}>
        {currentBody()}
      </div>
    </div>
  )
}

export default Body;
