// Creative Code Club
// Intro to Creative Coding
// Unit 6 - Keyboard Interactions
// Assignment 6.3 - Trigger Animations with Keys


// It's very common to trigger animations with key presses.
// In this example, we combine conditionals, variables
// and key presses to create animated bars.

let bar1Height = 10;
let bar2Height = 10;
let bar3Height = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let speed = 2;
  
  // Make the bars continually move down.
  if (bar1Height > 10) {
    bar1Height -= speed;
  }
  
  // Don't use else ifs! We need these to be independent
  if (bar2Height > 10) {
    bar2Height -= speed;
  }
  
  if (bar3Height > 10) {
    bar3Height -= speed;
  }
  
  rect(75, height - bar1Height, 50, bar1Height);
  rect(175, height - bar2Height, 50, bar2Height);
  rect(275, height - bar3Height, 50, bar3Height);
}

// Updates the text every time the user types.
function keyPressed () {  
  let maxHeight = 300;
  if (key === '1') {
    bar1Height = maxHeight;
  }
  
  if (key === '2') {
    bar2Height = maxHeight;
  }
  
  if (key === '3') {
    bar3Height = maxHeight; 
  }
}