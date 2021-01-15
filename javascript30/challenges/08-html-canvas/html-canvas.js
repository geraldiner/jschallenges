// JavaScript30 JS
// Get the canvas from the page and the context area for drawing. We also set the width and height to be the size of the window.
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 350;
canvas.height = window.innerHeight - 300;

// Setting the style of the drawing tool
ctx.lineJoin = "round";
ctx.lineCap = "round";

// Variables to keep track of the mouse's location and the color of the strokes
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  // First checks to see if the mouse is being clicked. If it is, it will start drawing, if not, it will just end the function.
  if (!isDrawing) return;

  // Set the color of the stroke to start at red
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  // Start a line
  ctx.beginPath();

  // Moves in the direction that the mouse is moving and updates the lastX, lastY for where the mouse came from
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // If the hue goes past the hsl range, resets it back to 0
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  // The line width starts as 0 and gets bigger, until it reaches 100, which is when it starts getting smaller, until it reaches 1 and starts getting bigger again.
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

// The canvas will only be drawing when the mouse is being clicked.
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

window.document.querySelector('#reset').addEventListener('click', () => {
  ctx.clearRect(0, 0, window.innerWidth - 350, window.innerHeight - 300)

})