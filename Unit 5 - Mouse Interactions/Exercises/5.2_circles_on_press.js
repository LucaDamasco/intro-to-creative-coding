// Creative Code Club
// Intro to Creative Coding
// Unit 5 - Mouse Interactions
// Assignment 5.2 - Circles On Press

// Using mousePressed() we can run code when the mouse
// is pressed on the canvas.

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
}

// Runs once when the mouse is pressed.
function mousePressed () {
  circle(mouseX, mouseY, 50);
}