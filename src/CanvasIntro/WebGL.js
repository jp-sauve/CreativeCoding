"use strict";
let gGL = null;

function initializeGL() {
  const canvas = document.getElementById("GLCanvas");
  gGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (gGL !== null) {
    gGL.clearColor(0.9, 0.9, 0.9, 1.0);
  } else {
    document.write("<br><b>WebGL not supported</b>");
  }
  
}

function clearCanvas() {
  gGL.clear(gGL.COLOR_BUFFER_BIT);
}

function doGLDraw() {
  initializeGL();
  clearCanvas();
}
