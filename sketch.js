const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [300, 300],
};
const sketch = () => {

  const createGrid = () => {
    const points = [];
    const count = 5;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / count;
        const v = y / count;
        points.push([u,v])
      }
    }
    return points;
  }

  const points = createGrid();
  console.log(points)
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    points.forEach((point) => {
      context.beginPath();
      context.arc(width * point[0], height * point[1], 10, 1*Math.PI, 1.5*Math.PI, true);
      context.stroke();
    })
  };

};

canvasSketch(sketch, settings);
