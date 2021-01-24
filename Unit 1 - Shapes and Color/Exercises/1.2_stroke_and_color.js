// Creative Code Club
// Intro to Creative Coding
// Unit 1 - Shapes
// Exercise 1.2 - Stroke and Color

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Strokes are the outlines on shapes!
  // stroke() changes border color
  // strokeWeight() changes border thickness
  // Fill is the inner color
  stroke(125, 50, 0); 
  strokeWeight(5); 
  fill(150); 
  circle(100, 100, 50);
  
  // If we don't call stroke, fill, or strokeWeight 
  // again they will be used in the next shape.
  circle(300, 100, 100);
  
  // We can turn stroke off with noStroke().
  noStroke();
  fill(0, 150, 0);
  circle(100, 300, 50);
  
  // And we can turn off fill with noFill()!
  stroke(0, 50, 150);
  noFill();
  circle(300, 300, 50);
}