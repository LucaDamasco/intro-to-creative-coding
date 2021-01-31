// Creative Code Club
// Intro to Creative Coding
// Unit 7 - Iteration
// Assignment 7.1 - Basic For Loop

// We can repeat code thousands of times by using loops!
// For loops allow us to run code a specific number of times.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // The code below can look a little confusing. Let's
  // break it down.
  
  // The code below draws 10 circles.
  
  // "let i=0" --> Create a variable i. Set it to 0.
  // "i<10" --> Keep running this code, so long as i is less than 10.
  // "i++" --> Each time the code is run, increase i by 1.
  
  for (let i=0; i<10; i++) {
    // This code will be repeated.
    // We can use the variable i in our code!
    circle(i * 40 + 20, 200, 20);
  }
}