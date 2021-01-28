// Creative Code Club
// Intro to Creative Coding
// Unit 4 - Conditionals
// Assignment 4.1 - If Changing Colors

// We can use IF statements to run different types of code based on
// a condition such as if a value is above or below a certain number.

// Below, we change the color of an object as it moves across
// the middle of the canvas.

let ballX = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
  // Make it green on the right of the canvas!
  
  if (ballX > 200) {
    // This code only runs if ballX is over 200
    fill(0, 255, 0);
  } else {
    // This code runs when the condition above is false!
    fill(255, 0, 0);
  }
  
  circle(ballX, 200, 50);
  
  ballX += 2;
}