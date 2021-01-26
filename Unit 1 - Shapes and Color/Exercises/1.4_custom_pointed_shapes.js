// Creative Code Club
// Intro to Creative Coding
// Unit 1 - Shapes
// Exercise 1.4 - Curved Shapes and Vertices

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Sometimes, overlaying shapes doesn't give us
  // enough control, so we create completely
  // custom shapes!
  
  // A 4-point shape.
  fill(255);
  quad(50, 100, 
       100, 50, 
       75, 150, 
       50, 125) 
  
  // A shape with "infinite" points.
  fill(150, 255, 0);
  beginShape();
    vertex(150, 150);
    vertex(200, 125);
    vertex(250, 150);
    vertex(225, 200);
    vertex(175, 225);
    vertex(125, 175);
  endShape(CLOSE); // This "Closes" the shape!
  
  // A curved Shape
  fill(0, 150, 255);
  beginShape();
    curveVertex(250, 250);
    curveVertex(275, 225);
    curveVertex(300, 275);
    curveVertex(325, 325);
    curveVertex(275, 350);
    curveVertex(225, 300);
    curveVertex(200, 275);
    curveVertex(225, 250);
    curveVertex(260, 260);
  endShape(CLOSE);
}