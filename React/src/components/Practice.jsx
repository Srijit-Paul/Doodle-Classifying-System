import React from "react";
import { useState } from "react";

function Practice(props) {
  const max=(props.state.exercise==="Capital Letters")?25:9;
  const [x,setX]=useState({i:parseInt(props.state.i),base:(props.state.exercise==="Capital Letters")?65:48});
  function prev(){
    setX({i:x.i-1,base:x.base});
  }
  function next(){
    setX({i:x.i+1,base:x.base});
  }
  console.log(x);
  return( 
  <div>
    <h1>{props.exercise}</h1>
    <h1>{String.fromCharCode(x.base+x.i)}</h1>
    <button><i class="fa-solid fa-eraser"></i></button>
    {x.i!=0 && <button onClick={prev}><i class="fa-solid fa-backward"></i></button>}
    {x.i<max && <button onClick={next}><i class="fa-solid fa-forward"></i></button>}
  </div>
  );
}

export default Practice;
