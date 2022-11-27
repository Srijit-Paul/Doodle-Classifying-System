import React from "react";
import { useEffect } from "react";
import { useState } from "react";

let char = null;
let ind = 0;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var done = false;

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
    this.ctx.font = "500px Arial";
    let t = this.ctx.fillStyle;
    this.ctx.fillStyle = "Gray";
    this.ctx.fillText(letters[charInd], 90, 430);
    this.ctx.fillStyle = t;
  }

  predict() {
    return new Promise((resolve, reject) => {
      let canvasPixels = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      let canvasPixelsTensor = tf.fromPixels(canvasPixels, 1);
      canvasPixelsTensor = tf.image.resizeBilinear(canvasPixelsTensor, [28, 28]);
      canvasPixelsTensor = canvasPixelsTensor.toFloat().mul(tf.tensor1d([1 / 255])).expandDims(0);

      let results = this.model.predict(canvasPixelsTensor);
      results.data().then(data => {
        data = Array.from(data);
        resolve(data[ind]);
      });
    });
  }

  max(out) {
    let t = [];
    for (let i = 0; i < 10; i++) {
      t.push([out[i], i]);
    }
    t.sort().reverse();
    return t[0];
  }

  clear() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    done = false;
  }

  drawTick() {
    if(done) return;
    let t = this.ctx.fillStyle;
    this.ctx.fillStyle = "green";
    this.ctx.font = "300px cursive";
    this.ctx.fillText("✔", 120, 300);
    this.ctx.fillStyle = t;
    done = true;
  }

  drawCross() {
    if(done) return;
    let t = this.ctx.fillStyle;
    this.ctx.fillStyle = "red";
    this.ctx.font = "300px cursive";
    this.ctx.fillText("X", 120, 300);
    this.ctx.fillStyle = t;
    done = true;
  }
}

var p;
function setModel(model) {
  p.model = model;
}
function lifeCycle() {
  p = new Paint();
  tf.loadModel('model/model.json').then(setModel);
}

function clear() {
  p.clear();
}

async function check() {
  let accuracy = await p.predict();
  if(accuracy > 0.9) {
    p.drawTick();
  } else {
    p.drawCross();
  }
}

function Test(props) {
  const max = (props.state.exercise === "Capital Letters") ? 25 : 9;
  const [x, setX] = useState({ i: parseInt(props.state.i), base: (props.state.exercise === "Capital Letters") ? 65 : 48 });
  char = String.fromCharCode(x.base + x.i);
  ind = x.i;
  useEffect(() => {
    lifeCycle();
  }, []);
  useEffect(() => {
    clear();
  }, [x]);
  let leftVis = (x.i == 0 ? "hidden":"");
  let rightVis = (x.i < max ? "": "hidden");
  function prev() {
    setX({ i: x.i - 1, base: x.base });
  }
  function next() {
    setX({ i: x.i + 1, base: x.base });
  }
  return (
    <div>
      <h1>{props.exercise}</h1>
      <h1 style={{textAlign:"center", fontFamily:"Arial", color:"white", fontSize:"2.5em"}}>{String.fromCharCode(x.base + x.i)}</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
          <canvas></canvas>
        </div>
      <div style={{display:"flex",marginTop:"1em", justifyContent:"space-around"}}>
        <button onClick={prev} style={{color:"white", padding:"10px",backgroundColor:"#343779",textAlign:"center",borderRadius:"10px", visibility:leftVis, border:"none",fontSize:"2em"}}><i className="fa-solid fa-backward"></i></button>
        <button onClick={clear} style={{color:"white", padding:"10px",backgroundColor:"#982062",textAlign:"center",borderRadius:"10px",  border:"none",fontSize:"2em"}}><i className="fa-solid fa-eraser"></i></button>
        <button onClick={check} style={{color:"white", padding:"10px",backgroundColor:"#982062",textAlign:"center",borderRadius:"10px",width:"55px", border:"none",fontSize:"2em"}}><i className="fa-solid fa-question"></i></button>
        <button onClick={next} style={{color:"white", padding:"10px",backgroundColor:"#343779",textAlign:"center",borderRadius:"10px", visibility:rightVis, border:"none",fontSize:"2em"}}><i className="fa-solid fa-forward"></i></button>
      </div>
    </div>
  );
}

export default Test;
