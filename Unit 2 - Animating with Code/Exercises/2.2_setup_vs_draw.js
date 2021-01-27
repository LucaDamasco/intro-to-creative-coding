// Creative Code Club
// Intro to Creative Coding
// Unit 2 - Animation
// Exercise 2.2 - setup() vs draw()

// setup() runs once, at the very start of the project.
// draw() runs every frame!
// By default, 60 frames per second.

let shapeY = 50;

function setup() {
  createCanvas(400, 400);
  
  // This circle draws ONCE
  // shapeY is 50 at the start!
  circle(50, shapeY, 50);
}

function draw() {
  // uncomment background() to see the setup() drawing get erased!
  // background(220);
  
  // This circle draws every frame!
  circle(300, shapeY, 50);
  
  // Move the shape down
  shapeY += 1;
}