// Creative Code Club
// Intro to Creative Coding
// Unit 6 - Keyboard Interactions
// Assignment 6.5 - Special Move Template

// Create a custom character that can move around the screen
// and perform a "special move". There are all sorts of special
// interactions a character can make, like a jump, slide, dig,
// explode, speed up, twist, and so much more! 

// Feel free to think beyond game characters. What other types
// of interactive user-controlled entities have unique actions?

let charX = 200;
let charY = 300;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawCharacter();
  moveCharacter();
}

function moveCharacter () {
  speed = 5;
  
  if (keyIsDown(LEFT_ARROW)) {
    charX -= speed;    
  } 
  
  if (keyIsDown(RIGHT_ARROW)) {
    charX += speed;
  }
}

// Edit this function to change the style of your character.
function drawCharacter() {
  // Body
  circle(charX, charY, 50);
  // Eyes
  circle(charX - 10, charY-10, 5);
  circle(charX + 10, charY-10, 5);
}
