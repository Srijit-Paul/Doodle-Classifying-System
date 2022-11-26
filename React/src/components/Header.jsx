import React from "react";
import Resize from "./Resize";
import Back from "./Back";

function Header(props) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Back goBack={props.goBack} />
      <h1
        style={{
          display: "flex",
          flexGrow: "200",
          justifyContent: "center"
        }}
      >
        DARS
      </h1>
      <Resize />
    </header>
  );
}
export default Header;
