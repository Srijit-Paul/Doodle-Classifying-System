import React from "react";

function Menu(props) {
    
  const max=(props.state.exercise==="Capital Letters")?25:9;
  const exs = [];
  const base= (props.state.exercise==="Capital Letters")?65:48;
  for (let i = 0; i <= max; i++) {
    exs.push(i);
  }
  const exercises = exs.map((ex,i) =><button value={ex} onClick={props.openEx} key={i}>{String.fromCharCode(base+ex)}</button> );
  
  return( 
  <div>
   {exercises}
  </div>
  );
}

export default Menu;
