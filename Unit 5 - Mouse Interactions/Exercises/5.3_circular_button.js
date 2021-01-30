// Creative Code Club
// Intro to Creative Coding
// Unit 5 - Mouse Interactions
// Assignment 5.3 - Circular Buttons

// By combining mouse interactions with
// conditionals, we can create a simple button!

// Buttons are great for triggering an action
// like drawing, or playing a sound.

// Defining basic button information.
let buttonX = 200;
let buttonY = 200;
let buttonSize = 100;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let distToCenter = dist(mouseX, mouseY, buttonX, buttonY);
  
  // Hovering over the button
  if (distToCenter < buttonSize/2) {
    fill(255, 255, 0);
  } else {
    // Not hovering over the button.
    fill(255);
  }
  
  circle(buttonX, buttonY, buttonSize);
}

// Only draw a circle if someone clicks
// on our button!
function mousePressed () {
    let distToCenter = dist(mouseX, mouseY, buttonX, buttonY);
  
  // Clicking over the button.
  if (distToCenter < buttonSize/2) {
    fill(0, 0, 255);
    ellipse(random(width), random(height), 20);
  }
}