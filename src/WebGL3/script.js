import { vertexShaderSource, fragmentShaderSource } from "./shaderSource.js";
import { compileShader, createProgram } from "./shaderSupport.js";

const canvas = document.getElementById("canv");
const gl = canvas.getContext("webgl2");

if (!gl) {
  document.write("No WebGL available");
}

let vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
let fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
let program = createProgram(gl, vertexShader, fragmentShader);
let positionAttributeLocation = gl.getAttribLocation(program, "a_position");
let resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
let positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
var positions = [10, 20, 80, 10, 10, 30, 10, 30, 80, 10, 80, 30];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
let vao = gl.createVertexArray();
gl.bindVertexArray(vao);
gl.enableVertexAttribArray(positionAttributeLocation);
let size = 2;
let type = gl.FLOAT;
let normalize = false;
let stride = 0;
let offset = 0;
gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
gl.clearColor(0.1, 0, 0, 2, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.useProgram(program);
gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
gl.bindVertexArray(vao);
let primitiveType = gl.TRIANGLES;
let aoffset = 0;
let count = 6;
gl.drawArrays(primitiveType, aoffset, count);
