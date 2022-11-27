import React from "react";

function Back(props) {
  return (
    // <AddIcon />
    <button onClick={props.goBack}><i class="fa-solid fa-arrow-left"></i></button>
  );
}

export default Back;
