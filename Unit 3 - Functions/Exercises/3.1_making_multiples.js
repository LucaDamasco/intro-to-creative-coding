// Creative Code Club
// Intro to Creative Coding
// Unit 3 - Functions
// Exercise 3.1 - Making Multiples

// We can use custom functions to create easily repeatable
// code!


function setup() {
  createCanvas(400, 400);
  
  frameRate(2); // Slow the project down
}

function draw() {
  // Draw a face every frame.
  // Notice how we only have to call this once!
  drawFace();
}

// Draws a face in a random place!
// When drawFace(), all the code below is run!
function drawFace () {
  
  let centerX = random(0, 400);
  let centerY = random(0, 400);
  
  circle(centerX, centerY, 50);
  circle(centerX - 10, centerY - 10, 15);
  circle(centerX + 10, centerY - 10, 15);
  
  ellipse(centerX, centerY + 15, 12)
}