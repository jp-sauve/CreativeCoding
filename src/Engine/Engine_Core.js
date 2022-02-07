"use strict";

let gEngine = gEngine || {};

gEngine.Core = (function () {
  // instance var: graphical context for drawing
  let mGL = null;
  // accessor of webgl context
  let getGL = () => mGL;

  let initializeWebGL = function (htmlCanvasID) {
    let canvas = document.getElementById(htmlCanvasID);
    mGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (mGL === null) {
      document.write("<br><b>WebGL is not supported!</b>");
      return;
    }
    gEngine.VertexBuffer.initialize();
  };

  let clearCanvas = function (color) {
    mGL.clearColor(color[0], color[1], color[2], color[3]);
    mGL.clear(mGL.COLOR_BUFFER_BIT);
  };

  let mPublic = {
    getGL,
    initializeWebGL,
    clearCanvas
  };

  return mPublic;
})();
