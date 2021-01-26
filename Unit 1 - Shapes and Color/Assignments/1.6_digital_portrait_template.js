// Creative Code Club
// Intro to Creative Coding
// Unit 1 - Shapes
// Assignment 1 - A Digital Portrait Template

// Use basic shapes, custom shapes, variables and color to create
// a digital portrait. This portrait can be of anything or anyone!
// You should use at least 3 different shape functions!
// 
// Consider how you might add your own flavor to the protrait. 
// Could you choose a specific style, like minimalism or pointilism?
// What about replicating the style of an artist you love?

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Add your own code here!
  let eyeHeight = 175;
  
  ellipse(200, 200, 175, 200);
  
  circle(175, eyeHeight, 20);
  circle(225, eyeHeight, 20);
  
  ellipse(200, eyeHeight + 75, 60, 50);
}