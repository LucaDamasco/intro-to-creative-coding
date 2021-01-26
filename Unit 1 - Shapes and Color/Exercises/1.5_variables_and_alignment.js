// Creative Code Club
// Intro to Creative Coding
// Unit 1 - Shapes
// Exercise 1.5 - Variables and Alignment

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // We often want to share information around
  // to different shapes, so we use variables!
  
  let left = 100; // Define a veriable with "let";
  
  // "left" gets substituted! Change left above, and
  // see what happens!
  circle(left, 100, 50);
  
  // We can use math symbols to alter values 
  // from variables slightly.
  circle(left + 50, 200, 50);
  circle(left - 50, 300, 50);
}