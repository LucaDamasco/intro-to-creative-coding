// Creative Code Club
// Intro to Creative Coding
// Unit 4 - Conditionals
// Assignment 4.2 - Chaining Conditions

// We can chain conditions together to create a series
// of logical choices.

// This program draws a different shape in 3 sections 
// of the canvas.

function setup() {
  createCanvas(400, 400);
  background(220);
  
  // Slow down the frame rate
  frameRate(5);
}

function draw() { 
  // Draw one of three random shapes
  
  // Pick a random location
  let shapeX = random(0, width);
  let shapeY = random(0, height);
  
  
  // Split the canvas into 3 parts.
  if (shapeX < width/3) {
    rect(shapeX, shapeY, 50);
    
  } else if (shapeX < (width/3) * 2) {
    
    // This only runs if the condition above is false.
    // We can add as many else if as we want to this chain!
    ellipse(shapeX, shapeY, 50);
  } else {
    
    // This runs when all conditions in the chain are false.
    line(shapeX, shapeY, shapeX + 50, shapeY + 50);
  }
}