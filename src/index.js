let r = 255;
let g = 255;
let b = 255;
let a = 1;
const startColour = `rgba(${r}, ${g}, ${b}, ${a})`;
let offset = 0;
console.log("setting offset to zero")
let layerOffset = 0;
let ltr = true;
let drawing = false;
let gap = 0;
const swatch = document.getElementById("swatch");
swatch.style.height = "30px";
swatch.style.border = "1px solid black"
const canvas1 = document.getElementById("first-canvas");
let ctx = canvas1.getContext("2d");

function draw(colour = startColour) {
  ctx.fillStyle = colour;

  if (ltr) {
    if (offset <= ctx.canvas.width) {
      ctx.fillRect(0 + offset++, gap, 2, 600 - gap * 2);
    } else if (offset > ctx.canvas.width) {
      ltr = !ltr;
      if (gap >= ctx.canvas.height / 2) {
        gap = 0;
        a = 1;
      } else {
        gap += 10;
        a -= 0.04;
      }
      ctx.fillRect(0+offset--, gap, 2, 600 - gap * 2)
    } 
  } else {
    console.log("is rtl")
    if (offset >= 0) {
      ctx.fillRect(0 + offset--, gap, 2, 600 - gap * 2);
    } else {
      ltr = !ltr;
      if (gap >= ctx.canvas.height / 2) {
        gap = 0
        a = 1;
      } else {
        gap += 10;
        a -= 0.04;
      }
      ctx.fillRect(0 + offset++, gap, 2, 600 - gap * 2);
    }
  }
}

function handleSlider(elem) {
  switch (elem.target.id) {
    case "red":
      r = elem.target.value;
      break;
    case "green":
      g = elem.target.value;
      break;
    case "blue":
      b = elem.target.value;
      break;
    case "alpha":
      a = elem.target.value;
  }
  swatch.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}
let go = document.getElementById("draw");
go.onchange = (event) => {
  if (!drawing) {
    drawing = setInterval(() => {
      let rr = r;
      let gg = g;
      let bb = b;
      let aa = a;
      draw(`rgba(${rr}, ${gg}, ${bb}, ${aa})`);
    },1)
  } else {
    clearInterval(drawing);
    drawing = false;
  }
}
let redSlider = document.getElementById("red");
redSlider.oninput = handleSlider;
let greenSlider = document.getElementById("green");
greenSlider.oninput = handleSlider;
let blueSlider = document.getElementById("blue");
blueSlider.oninput = handleSlider;
let alphaSlider = document.getElementById("alpha");
alphaSlider.oninput = handleSlider;
