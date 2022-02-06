"use strict";

let gSquareVertexBuffer = null;

function initSquareBuffer() {
  // Vertices
  let verticesOfSquare = [
    0.5, 0.5, 0.0,
    -0.5, 0.5, 0.0,
    0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
  ];
  // A: Create buffer on gGL context
  gSquareVertexBuffer = gGL.createBuffer();

  // B: Activate buffer
  gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);

  // C: Load verticesOfSquare into new gSquareVertexBuffer
  gGL.bufferData(gGL.ARRAY_BUFFER, new Float32Array(verticesOfSquare), gGL.STATIC_DRAW);
}