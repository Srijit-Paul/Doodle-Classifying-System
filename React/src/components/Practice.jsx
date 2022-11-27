import React from "react";
import { useState, useEffect } from "react";




let char = null;
let ind = 0;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

let num = false;


class Paint {
  constructor() {
    this.canvas = document.getElementsByTagName("canvas")[0];
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = Math.min(window.innerWidth, 500);
    this.canvas.height = Math.min(window.innerWidth, 500);
    this.ctx.strokeStyle = "white";
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 20;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.mouse = {
      x: -1,
      y: -1,
    };
    this.writing = false;

    this.makeDrawable();
    this.model = null;
  }

  listen(types=[], f) {
    types.forEach((type) => {
      this.canvas.addEventListener(type, f);
    });
  }

  makeDrawable() {
    this.listen(["mousedown", "touchstart"], (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.writing = true;
      this.mouse.x = (e.clientX || e.targetTouches[0].clientX) - this.canvas.offsetLeft;
      this.mouse.xx = this.mouse.x * 28 / this.canvas.width;
      this.mouse.y = (e.clientY || e.targetTouches[0].clientY) - this.canvas.offsetTop;
      this.mouse.yy = this.mouse.y * 28 / this.canvas.height;
    });

    this.listen(["mousemove", "touchmove"], (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!this.writing) return;
      this.ctx.beginPath();
      this.ctx.moveTo(this.mouse.x, this.mouse.y);
      this.mouse.x = (e.clientX || e.targetTouches[0].clientX) - this.canvas.offsetLeft;
      this.mouse.y = (e.clientY || e.targetTouches[0].clientY) - this.canvas.offsetTop;
      this.ctx.lineTo(this.mouse.x, this.mouse.y);
      this.ctx.stroke();
      this.ctx.closePath();
    });

    this.listen(["mouseup", "touchend"], (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.writing = false;
    });

    this.listen(["mouseleave", "touchend"], (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.writing = false;
    });
  }

  paintBackground() {
    this.ctx.font = "400px Arial";
    let t = this.ctx.fillStyle;
    this.ctx.fillStyle = "Gray";
    if(num)
      this.ctx.fillText(numbers[ind], 55, 330);
    else
      this.ctx.fillText(letters[ind], 55, 330);
    this.ctx.fillStyle = t;
  }

  clear() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
  }
}

var p;

function lifeCycle() {
  p = new Paint();
  p.paintBackground();
}

function clear() {
  p.clear();
  p.paintBackground();
}







function Practice(props) {
  const max=(props.state.exercise==="Capital Letters")?25:9;
  const [x,setX]=useState({i:parseInt(props.state.i),base:(props.state.exercise==="Capital Letters")?65:48});
  if(x.base == 48) num = true;
  char = String.fromCharCode(x.base + x.i);
  ind = x.i;
  useEffect(() => {
    lifeCycle();
  }, []);
  useEffect(() => {
    clear();
  }, [ind]);
  let leftVis = (x.i == 0 ? "hidden":"");
  let rightVis = (x.i < max ? "": "hidden");
  function prev(){
    setX({i:x.i-1,base:x.base});
  }
  function next(){
    setX({i:x.i+1,base:x.base});
  }
  return(
    <div>
    <h1>{props.exercise}</h1>
      <div style={{display:"flex", justifyContent:"center"}}>
        <canvas></canvas>
      </div>
    <div style={{display:"flex",marginTop:"2em", justifyContent:"space-around"}}>
      <button onClick={prev} style={{color:"white", padding:"10px",backgroundColor:"#343779",textAlign:"center",borderRadius:"10px", visibility:leftVis, border:"none",fontSize:"2em"}}><i className="fa-solid fa-backward"></i></button>
      <button onClick={clear} style={{color:"white", padding:"10px",backgroundColor:"#982062",textAlign:"center",borderRadius:"10px",  border:"none",fontSize:"2em"}}><i className="fa-solid fa-eraser"></i></button>
      <button onClick={next} style={{color:"white", padding:"10px",backgroundColor:"#343779",textAlign:"center",borderRadius:"10px", visibility:rightVis, border:"none",fontSize:"2em"}}><i className="fa-solid fa-forward"></i></button>
      </div>
    </div>
  
  );
}

export default Practice;
