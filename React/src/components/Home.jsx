import React from "react";
import Card from "./Card";
function Home(props){
  return(
    <div>
      <Card image="./AZ.jpg" module="Capital Letters" onClick={props.onClick}/>
      <Card image="./09.jpg" module="Numbers" onClick={props.onClick}/>
    </div>
  );
}

export default Home;


