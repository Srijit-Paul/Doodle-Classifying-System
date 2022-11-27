import React from "react";

function Back(props) {
  console.log(props);
  return (
    // <AddIcon />
    <button style={{visibility:props.visible, color:"white", padding:"10px",backgroundColor:"transparent",textAlign:"center",borderRadius:"10px",width:"55px", border:"none",fontSize:"2em"}} onClick={props.goBack}><i className="fa-solid fa-arrow-left"></i></button>
  );
}

export default Back;
