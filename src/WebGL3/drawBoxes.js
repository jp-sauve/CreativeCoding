export function drawBoxes(gl, program, num) {
  let colorLocation = gl.getUniformLocation(program, "u_color");

  for (var ii = 0; ii < num; ++ii) {
    // Setup a random rectangle
    setRectangle(
      gl,
      randomInt(600),
      randomInt(400),
      randomInt(300),
      randomInt(300)
    );

    // Set a random color.
    gl.uniform4f(colorLocation, 0, Math.random(), Math.random(), 0.1);

    // Draw the rectangle.
    let primitiveType = gl.TRIANGLES;
    let offset = 0;
    let count = 6;
    gl.drawArrays(primitiveType, offset, count);
  }

  function randomInt(range) {
    return Math.floor(Math.random() * range);
  }
  function setRectangle(gl, x, y, width, height) {
    var x1 = x;
    var x2 = x + width;
    var y1 = y;
    var y2 = y + height;

    // NOTE: gl.bufferData(gl.ARRAY_BUFFER, ...) will affect
    // whatever buffer is bound to the `ARRAY_BUFFER` bind point
    // but so far we only have one buffer. If we had more than one
    // buffer we'd want to bind that buffer to `ARRAY_BUFFER` first.

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]),
      gl.STATIC_DRAW
    );
  }
}