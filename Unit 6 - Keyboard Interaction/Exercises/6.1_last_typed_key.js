// Creative Code Club
// Intro to Creative Coding
// Unit 6 - Keyboard Interactions
// Assignment 6.1 - Displaying Typed Text

// We can trigger code whenever a user presses
// a key.

let typed = '';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draws typed characters.
  textAlign(LEFT);
  textSize(18);
  text(typed, 20, 40);
  
  textSize(30);
  // Let's us know how many characters were typed!
  textAlign(CENTER);
  text('Number of Characters', 200, 100);
  text(typed.length, 200, 150);
}

// Updates the text every time the user types.
function keyPressed () {
  typed = typed + key; // 'key' is the last key pressed!
}