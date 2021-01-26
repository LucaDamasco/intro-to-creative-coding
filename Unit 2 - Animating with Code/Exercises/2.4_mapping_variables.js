// Creative Code Club
// Intro to Creative Coding
// Unit 2 - Animation
// Exercise 2.4 - Mapping Variables

// We can use variables for more than one thing!
// Below, we'll use ballX and ballY to also
// pick a color!


// Use variables to keep track of position.
let ballX = 200;
let ballY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  // The canvas is 400 pixels wide.
  // Let's map the ball's position, to red and green! 
  // The farther to the right, the more red and green!
  let red = map(ballX, 0, 400, 100, 255);
  let green = map(ballY, 0, 400, 100, 255);
  
  // Use our new color variables for the ball color!
  fill(red, green, 0);
  circle(ballX, ballY, 50);
  
  // Move the ball by a random amount between
  // -3 and +3. Change these values to create
  // a different movement!
  ballX += random(-3, 3);
  ballY += random(-3, 3);
}