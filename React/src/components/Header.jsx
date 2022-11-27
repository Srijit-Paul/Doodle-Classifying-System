import React from "react";
import Resize from "./Resize";
import Back from "./Back";
import { height } from "@mui/system";

function Header(props) {
  let vis = (props.current == "Home") ? "hidden" : "";
  console.log(vis);
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        top: "0",
        width: "95%",
        backgroundColor: "#1a1d21",
        color: "white",
        height: "10vh"
      }}
    >
      <Back goBack={props.goBack} visible={vis} />
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
