import React from "react";
import Card from "./Card";
function Home(props){
  return(
    <div>
      <h1>H</h1>
      <Card module="Capital Letters" desc="Lorem ipsum" onClick={props.onClick}/>
      <Card module="Numbers" desc="Lorem ipsum" onClick={props.onClick}/>
    </div>
  );
}

export default Home;


