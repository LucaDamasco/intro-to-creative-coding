// Creative Code Club
// Intro to Creative Coding
// Unit 2 - Animation
// Exercise 2.3 - Random Walk

// By using the random() function, we can make
// a character randomly move around the canvas!


// Use variables to keep track of position.
let ballX = 200;
let ballY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw our circle with variables
  circle(ballX, ballY, 50);
  
  // Move the ball by a random amount between
  // -2 and +2. Change these values to create
  // a different movement!
  ballX += random(-2, 2);
  ballY += random(-2, 2);
}