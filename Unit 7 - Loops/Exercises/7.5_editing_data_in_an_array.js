// Creative Code Club
// Intro to Creative Coding
// Unit 7 - Iteration
// Assignment 7.5 - Editing Data in an Array

// We can do more than just generate data in an
// array, we can also edit it! Below, we'll
// create an array of values that represent the
// location of some objects on the screen.

// An array that stores the y positions of objects
let positions = [];

function setup() {
  createCanvas(400, 400);

  // Generate basic starting position.
  for (let i=0; i<10; i++) {
    positions.push(200);
  }
  
}

function draw() {
  background(220);
  
  drawObjects();
  moveObjects();
}

function drawObjects () {
  for (let i=0; i<positions.length; i++) {
    // Draw an object based on the position
    let yPosition = positions[i];
    circle(i * 40 + 20, yPosition, 30);
  }
}

function moveObjects () {
  for (let i=0; i<positions.length; i++) {
    // Randomly jiggle the object's y position.
    positions[i] += random(-1, 1);
  }
}