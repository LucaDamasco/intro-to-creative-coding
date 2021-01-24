// Creative Code Club
// Intro to Creative Coding
// Unit 1 - Shapes
// Exercise 1.1 - Intro to Shapes 

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(220);

  // A red rectangle
  fill(255, 0, 0);
  rect(50, 50, 50, 75);

  // A green oval
  fill(0, 255, 0);
  ellipse(200, 200, 100, 60);

  // A yellow triangle
  fill(255, 255, 0);
  triangle(300, 300, 250, 350, 350, 350);
}