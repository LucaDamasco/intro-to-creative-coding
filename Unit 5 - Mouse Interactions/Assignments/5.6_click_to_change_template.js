// Creative Code Club
// Intro to Creative Coding
// Unit 5 - Mouse Interactions
// Assignment 5.6 - Simple Drawing Program

// Create a project that changes each time
// the user clicks the canvas. At least three
// distinct elements of the project should
// change each click!

let point1X = 100;
let point1Y = 100;

let point2X = 200;
let point2Y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  line(point1X, point1Y, point2X, point2Y);
}

// Clicking the mouse changes variables above.
function mousePressed () {
  point1X = random(width);
  point1Y = random(height);
  
  point2X = random(width);
  point2Y = random(height);
}