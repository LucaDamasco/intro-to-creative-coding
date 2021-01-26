// Creative Code Club
// Intro to Creative Coding
// Unit 1 - Shapes
// Exercise 1.3 - Custom Shapes and Drawing Order

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Shapes that are drawn last will show up above
  // other shapes!
  
  // We can use this idea to create custom shapes.
  
  // A circle and a rectangle can create a semi-circle
  noStroke();
  fill(255);
  circle(100, 100, 100);
  
  fill(220); // Same gray as background!
  rect(50, 100, 100, 50);
  
  // Combining other shapes, we can create more
  // complex characters!
  fill(255, 255, 0);
  circle(200, 200, 100);
  
  fill(220);
  triangle(200, 200, 250, 150, 250, 250);
  
  // We can also create cutouts from the center
  // of other shapes!
  fill(0);
  rect(250, 300, 100, 50);
  
  fill(220);
  circle(300, 325, 30);
}