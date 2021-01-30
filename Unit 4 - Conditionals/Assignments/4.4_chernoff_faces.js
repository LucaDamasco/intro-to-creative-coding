// Creative Code Club
// Intro to Creative Coding
// Unit 4 - Conditionals
// Assignment 4.4 - Chernoff Faces Template

// In this assignment, you'll create a face that changes
// every time the play button is pressed. 

// Your face should include at least 3 elements that change
// every time the project is run.

// Consider how you might alter dimensions like shape, color,
// rotation, curvature, shadows and facial features. 

function setup() {
  createCanvas(400, 400);
  background(220);
  
  // Edit and add to the code below to create new 
  // features and details!
  
  // Face
  ellipse(200, 200, 250, 350);
  
  // Eyebrows
  strokeWeight(3);
  if (random() < .5) {
    line(150, 150, 180, 130);
    line(250, 150, 220, 130);
  } else {
    line(150, 130, 180, 150);
    line(250, 130, 220, 150);
  }
  
  circle(165, 175, 20);
  circle(235, 175, 20);
  
}