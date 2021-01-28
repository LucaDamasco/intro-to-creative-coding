// Creative Code Club
// Intro to Creative Coding
// Unit 4 - Conditionals
// Assignment 4.3 - Logical Operators

// When using if statements we can combine
// conditions to check multiple ideas at once!

function setup() {
  createCanvas(400, 400);
  background(220);
  
  // Drawing a cross on the screen so we 
  // can see the quadrants.
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
}

function draw() { 
  // Draw shapes in different colors if they are
  // in the top left corner of the screen.
  
  // Pick a random location
  let shapeX = random(0, width);
  let shapeY = random(0, height);
  
  // && is read as AND.
  
  // If the shapeX is less than width/2 AND shapeY is also less than
  // height/2, make it red!
  if (shapeX < width/2 && shapeY < height/2) {
    fill(255, 0, 0);
    circle(shapeX, shapeY, 10);
  } else {
    fill(0, 0, 255);
    circle(shapeX, shapeY, 10);
  }
  
}