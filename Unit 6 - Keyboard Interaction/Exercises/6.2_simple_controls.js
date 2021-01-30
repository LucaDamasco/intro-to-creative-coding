// Creative Code Club
// Intro to Creative Coding
// Unit 6 - Keyboard Interactions
// Assignment 6.2 - Simple Controls


// By adding conditionals, we can trigger code to make a character
// move on screen.

let charX = 200;
let charY = 200;
let speed = 5; // The speed of the character, higher is faster!

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  circle(charX, charY, 20);
  
  // These will make the character move smoothly.
  if (keyIsDown(DOWN_ARROW)) {
    charY = charY + speed;
  } else if (keyIsDown(UP_ARROW)) {
    charY = charY - speed;
  } else if (keyIsDown(LEFT_ARROW)) {
    charX = charX - speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    charX = charX + speed;
  }
  
  textAlign(CENTER);
  textSize(20);
  text('Arrow Keys to move smoothly', 200, 100);
  text('WASD to move only a little!', 200, 150);
}

// Updates the text every time the user types.
function keyPressed () {  
  // These pieces of code run ONCE when the key is pressed.
  if (key === 'w') {
    charY = charY - speed;
  } else if (key === 's') {
    charY = charY + speed;
  } else if (key === 'a') {
    charX = charX - speed;
  } else if (key === 'd') {
    charX = charX + speed;
  }
}