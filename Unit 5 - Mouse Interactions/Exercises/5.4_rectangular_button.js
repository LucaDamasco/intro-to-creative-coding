// Creative Code Club
// Intro to Creative Coding
// Unit 5 - Mouse Interactions
// Assignment 5.4 - Rectangle Buttons

// Rectangle buttons are a little more
// involved than circular buttons.

// We need to check if the mouse is inside
// all of the edges of the rectangle. This
// is a great opportunity to use a helper
// function that checks 

// Defining basic button information.
let buttonX = 200;
let buttonY = 200;
let buttonW = 100;
let buttonH = 50;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // The highlight color
  if (mouseIsTouchingRect(buttonX, buttonY, buttonW, buttonH)) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  
  rectMode(CENTER);
  rect(buttonX, buttonY, buttonW, buttonH);
}

// Returns true if a rectangle with the 
// given parameters is being touched by
// the mouse, false otherwise.
function mouseIsTouchingRect(x, y, w, h) {
  let left = x - w/2;
  let right = x + w/2;
  let top = y - h/2;
  let bot = y + h/2;

  // Check if the mouse is inside!
  if(mouseX > left && 
     mouseX < right && 
     mouseY > top &&
     mouseY < bot) {
    return true;
  } else {
    return false;
  }
}

function mousePressed () {
  // We can re-use our mouseIsTouching helper
  // function to not have to repeat code!
  
  if (mouseIsTouchingRect(buttonX, buttonY, buttonW, buttonH)) {
    fill(0, 0, 255);
    square(random(width), random(height), 20);
  }
}