import React from "react";

var colors = ['#33A9AC','#E8A92D','#F86041','#982062','#343779'];

function Menu(props) {
    
  const max=(props.state.exercise==="Capital Letters")?25:9;
  const exs = [];
  const base= (props.state.exercise==="Capital Letters")?65:48;
  for (let i = 0; i <= max; i++) {
    exs.push(i);
  }
  const exercises = exs.map((ex,i) =>{
    let color = colors[Math.floor(Math.random()*colors.length)];
    return <button style={{
      backgroundColor: color, 
      height:"15vw", 
      width:"15vw",
      border:"none",
      margin: "2vw",
      fontSize:"8vw",
      color:"white",
      borderRadius: "50%",
      padding:"auto",
      cursor:"pointer"}
    } value={ex} onClick={props.openEx} key={i}>{String.fromCharCode(base+ex)}</button>
  });
  
  return( 
  <div style={{    display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      backgroundColor: "#1a1d21",
      minHeight: "90vh",
      alignContent: "center"
  }}>
   {exercises}
  </div>
  );
}

export default Menu;
