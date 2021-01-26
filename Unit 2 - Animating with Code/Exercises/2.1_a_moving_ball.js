// Creative Code Club
// Intro to Creative Coding
// Unit 2 - Animation
// Exercise 2.1 - A Moving Ball

// We can use variables to keep track of an
// object's position and move it around!

let ballX = 0;
let ballY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw our circle with variables
  circle(ballX, ballY, 50);
  
  // Move the ball to the right
  // by increasing the x value.
  ballX += 2;
}