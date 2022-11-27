import React, { useState } from "react";

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

function Resize(props) {
  const [fullscreen, setFullscreen] = useState(false);

  function resize() {
    if (fullscreen) {
      closeFullscreen();
    } else {
      openFullscreen();
    }
    setFullscreen(!fullscreen);
  }

  return (
    // <AddIcon />
    <button onClick={resize}>{fullscreen?<i class="fa-solid fa-compress"></i>:<i class="fa-solid fa-expand"></i>}</button>
  );
}

export default Resize;
