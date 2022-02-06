let gSimpleShader = null;
let gShaderVertexPositionAttribute = null;

function loadAndCompileShader(id, shaderType) {
  let shaderText, shaderSource, compiledShader;

  // A: Get shader src
  shaderText = document.getElementById(id);
  shaderSource = shaderText.firstChild.textContent;

  // B: Create shader based on type
  compiledShader = gGL.createShader(shaderType);

  // C: Compile shader
  gGL.shaderSource(compiledShader, shaderSource);
  gGL.compileShader(compiledShader);

  // D: Check for error and return
  if (!gGL.getShaderParameter(compiledShader, gGL.COMPILE_STATUS)) {
    alert("Shader compilation error: " + gGL.getShaderInfoLog(compiledShader));
  }
  return compiledShader;
}

function initSimpleShader(vertexShaderID, fragmentShaderID) {
  // A: Load and compile vertex and fragment shaders
  let vertexShader = loadAndCompileShader(vertexShaderID, gGL.VERTEX_SHADER);
  let fragmentShader = loadAndCompileShader(
    fragmentShaderID,
    gGL.FRAGMENT_SHADER
  );

  // B: Create and link shaders into a program
  gSimpleShader = gGL.createProgram();
  gGL.attachShader(gSimpleShader, vertexShader);
  gGL.attachShader(gSimpleShader, fragmentShader);
  gGL.linkProgram(gSimpleShader);

  // C: Check for errors
  if (!gGL.getProgramParameter(gSimpleShader, gGL.LINK_STATUS)) {
    alert("Error linking shader!");
  }

  // D: Gets reference to aSquareVertexPosition attribute
  gShaderVertexPositionAttribute = gGL.getAttribLocation(
    gSimpleShader,
    "aSquareVertexPosition"
  );

  // E: Activates vertex buffer loaded in VertexBuffer.js
  gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);

  // F: Describe characteristic of the vertex position attribute
  gGL.vertexAttribPointer(gShaderVertexPositionAttribute,
    3,//each vertex is a 3-float (x,y,z)
    gGL.FLOAT,//data type
    false,// normalized vectors?
    0,//bytes to skip between elements
    0);//offsets to the first element
}
