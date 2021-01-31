// Creative Code Club
// Intro to Creative Coding
// Unit 6 - Keyboard Interactions
// Assignment 6.4 - Key Released  

// Just like with mouse presses, we can run code when keys
// are released, as well as when they are pressed down.

let clr = 255;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(clr);
  circle(200, 200, 100);
  
  // Press any key to make the circle darker.
  if (clr > 0 && keyIsPressed) {
    clr -= 2;
  }
}

// Release any key to lighten the circle again!
function keyReleased () {
  clr = 255;  
}