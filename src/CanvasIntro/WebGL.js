"use strict";
let gGL = null;

function initializeGL() {
  const canvas = document.getElementById("GLCanvas");
  gGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (gGL !== null) {
    gGL.clearColor(0.2, 0.9, 0.2, 1.0);
    // A: init vertex buffer
    initSquareBuffer();
    // B: Load and compile vertex and fragment shaders
    initSimpleShader("VertexShader", "FragmentShader");
  } else {
    document.write("<br><b>WebGL not supported</b>");
  }
  
}
function drawSquare() {
  gGL.clear(gGL.COLOR_BUFFER_BIT);
  
  // A: Activate shader
  gGL.useProgram(gSimpleShader);
  gGL.enableVertexAttribArray(gShaderVertexPositionAttribute);
  gGL.drawArrays(gGL.TRIANGLE_STRIP, 0, 4);
}

function doGLDraw() {
  initializeGL();
  drawSquare();
}
