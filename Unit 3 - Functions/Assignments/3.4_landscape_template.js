// Creative Code Club
// Intro to Creative Coding
// Unit 3 - Functions
// Assignment 3.4 - Template

// Create a landscape with at least 3 repeating features. 
// Be sure to use at least 3 custom functions!

// What will your landscape be based on? Will you recreate
// a favorite location? Maybe your landscape can be a
// zoomed in look at a tiny world? The choice is yours!

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Repeat these after editing the functions!
  myCustomShape1(100, 100);
  myCustomShape2(200, 200);
  myCustomShape3(300, 300);
}

function myCustomShape1(x, y) {
  // Change this!
  ellipse(x, y, 50);
  
}


function myCustomShape2(x, y) {
  // Change this!
  rect(x, y, 50);
}


function myCustomShape3(x, y) {
  // Change this!
  line(x, y, x + 50, y + 50);
}