// Creative Code Club
// Intro to Creative Coding
// Unit 2 - Animation
// Exercise 2.5 - Animated Circle

// We can use a few built in functions
// to create a looping animation.

// Keep track of a variable that represents
// a position on the circle.
let theta = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // How big should the animated circle be?
  let circleSize = 50;
  
  // Find the circle position.
  let ballX = 200 + (cos(theta) * circleSize);
  let ballY = 200 + (sin(theta) * circleSize);
  
  circle(ballX, ballY, 25);
  
  // Change the position on the circle.
  theta += .05;
}