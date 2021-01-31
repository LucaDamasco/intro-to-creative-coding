// Creative Code Club
// Intro to Creative Coding
// Unit 7 - Iteration
// Assignment 7.6 - Repeating Pattern Template

// Create a repeating pattern that replicates a
// pattern in you've found in real life. Consider
// patterns that are around you, patterns you've
// found on line, and historic patterns.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); 
  
  // Feel free to edit, or replace the code below!
  
  // Draws a simple grid of alternating shapes.
  for (let row=0; row<10; row++) {
    for (let col=0; col<10; col++) {   
      
      if (row % 2 === 0) {
        fill(125);
        circle(col * 40 + 20, row * 40 + 20, 20);
      } else {
        fill(255);
        rectMode(CENTER);
        square(col * 40 + 20, row * 40 + 20, 20);
      }
      
    }
  }
}