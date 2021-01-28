// Creative Code Club
// Intro to Creative Coding
// Unit 3 - Functions
// Exercise 3.2 - Parameters

// We can send values into functions (parameters)
// these values can then be used like variables!


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawTree(150, 200, 30);
  drawTree(250, 250, 20);
  drawTree(300, 175, 25);

}

// Draws a tree at x, y with a certain width.
function drawTree(x, y, branchSize) {
  
  // The Brown Stump
  rectMode(CENTER);
  noStroke();
  fill(210, 105, 30);
  rect(x, y - 30, branchSize/2, 60);
  
  // The Green Branches
  // We draw the top of the tree relative to
  // the stump!
  
  fill(0, 200, 0);
  // Bottom Leaves
  let branch1Y = y - 30;
  triangle(x - branchSize, branch1Y, x + branchSize, branch1Y, x, y - 30 * 2)
  
  // Top Leaves
  let branch2Y = branch1Y - 15;
  triangle(x - branchSize, branch2Y, x + branchSize, branch2Y, x, branch2Y - 30)
  
}