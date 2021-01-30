// Creative Code Club
// Intro to Creative Coding
// Unit 5 - Mouse Interactions
// Assignment 5.1 - MouseX Drawing Machine 

// We can follow the mouse with mouseX and mouseY
// two variables that p5 gives us!

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // Move the moouse over the canvas to
  // see this draw!
  circle(mouseX, mouseY, 25);
}