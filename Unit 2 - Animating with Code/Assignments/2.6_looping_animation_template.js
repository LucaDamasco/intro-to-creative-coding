// Creative Code Club
// Intro to Creative Coding
// Unit 2 - Animation
// Exercise 2.5 - Looping Animation Template

// Use the example project below to create a
// looping animation that goes on forever!


// You might want to create a few of these.
let theta1 = 0;
let theta2 = 100; // Start at different points

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Use sin() and cos() to get some 
  // looping values.
  let shape1X = 100 + cos(theta1) * 50;
  let shape2Y = 200 + sin(theta2) * 50;
  
  // Draw some looping shapes.
  circle(shape1X, 200, 50);
  circle(300, shape2Y, 50);
  
  // Change theta to get new values
  // from sin() and cos();
  theta1 += .05;
  theta2 += .05;
}