// Creative Code Club
// Intro to Creative Coding
// Unit 7 - Iteration
// Assignment 7.2 - Alternating Shapes

// We can combine conditionals with for loops
// To run different code on each iteration of
// the for loop.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw an alternating line of shapes.
  for (let i=0; i<10; i++) {
    
    // % (Called "Modulo" or "Mod")
    // represents the remainder after division.
    
    // If i is EVEN
    if (i % 2 === 0) {
      circle(i * 40 + 20, 200, 20);
    } else {
      // Otherwise, i is odd!
      rectMode(CENTER);
      square(i * 40 + 20, 200, 20)
    }
  }
}