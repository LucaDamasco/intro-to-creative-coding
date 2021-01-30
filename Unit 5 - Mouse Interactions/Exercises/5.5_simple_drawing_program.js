// Creative Code Club
// Intro to Creative Coding
// Unit 5 - Mouse Interactions
// Assignment 5.5 - Simple Drawing Program

// Buttons can be used to change internal
// data, not just draw things! 

// Below, we create a little drawing program
// with mutliple tools! This example only
// changes shapes, but can you edit it to
// also allow color choices?

// Define the position of the buttons.
let circleButtonX = 50;
let circleButtonY = 50;

let rectButtonX = 50;
let rectButtonY = 125;

// Keep track of which tool is chosen.
// 0 for circle, 1 for rectangle!
let selectedTool = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  rectMode(CENTER);
  drawButtons();
}

// Draws the buttons on the canvas.
function drawButtons() {
  
  // Determine if we should highlight
  // the button.
  if (dist(mouseX, mouseY, circleButtonX, circleButtonY) < 25 || selectedTool === 0) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  
  // Draw the button and icon.
  circle(circleButtonX, circleButtonY, 50);
  fill(0, 255, 0);
  circle(circleButtonX, circleButtonY, 30);
  
  
  if (dist(mouseX, mouseY, rectButtonX, rectButtonY) < 25 || selectedTool === 1) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  circle(rectButtonX, rectButtonY, 50);
  fill(0, 0, 255);
  rect(rectButtonX, rectButtonY, 30);
}

// Determine if we should switch the selected
// tool!
function mousePressed () {
  if (dist(mouseX, mouseY, circleButtonX, circleButtonY) < 25) {
    selectedTool = 0;
  } else if (dist(mouseX, mouseY, rectButtonX, rectButtonY) < 25) {
    selectedTool = 1;
  }
}

// When the user drags the mouse draw the
// appropriate shape.
function mouseDragged () {
  if (selectedTool === 0) {
    fill(0, 255, 0);
    circle(mouseX, mouseY, 20);
  } else if (selectedTool === 1) {
    fill(0, 0, 255);
    rect(mouseX, mouseY, 20);
  }
}

