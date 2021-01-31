// Creative Code Club
// Intro to Creative Coding
// Unit 7 - Iteration
// Assignment 7.3 - Creating a Grid

// We can use for loops inside other for loops!
// This is called a "Nested" loop.
// Doing this, we can create a grid, letting 
// one loop control rows and the other
// control columns.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Make sure the cells fill up the whole canvas!
  let cellSize = width/10;
  
  // We use the variables col and row to 
  // represent columns and rows!
  for (let col=0; col<10; col++) {
    
    // This inner for loop runs 10 times for EACH iteration
    // of the outer for loop.
    for (let row=0; row<10; row++) {
      square(col * cellSize, row * cellSize, cellSize);
    }
  }
}