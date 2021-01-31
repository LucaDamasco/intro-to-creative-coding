// Creative Code Club
// Intro to Creative Coding
// Unit 7 - Iteration
// Assignment 7.4 - Storing Data in an Array

// So far, we've used variables to store data.
// We can use Arrays to store a lot more data,
// without having to create a new variable for
// each piece of information!

// We use square brackets to create an empty array.
let nums = [];

function setup() {
  createCanvas(400, 400);
  
  // When adding information to an array, we use
  // the push() method.
  
  // The code below will "push" a random number
  // into the array.
  nums.push(random(10, 30));
  
  // To get a value out of an array, we use the 
  // square brackets and the index (or position)
  // of the value we want. Array indices start at 0!
  
  print(nums[0]) // Check the console to see our number
  
  // We can place this push inside a for loop to 
  // generate many values for later use!
  for (let i=0; i<10; i++) {
    nums.push(random(10, 30));
  }
  
}

function draw() {
  background(220);
  
  // We can use a for loop to get each value out
  // of an array. 
  
  // array.length gives us the number of items 
  // in the array.
  
  for (let i=0; i<nums.length; i++) {
    // Pull out the random value we generated before.
    let size = nums[i]; 
    
    circle(i * 40, 200, size);
  }
}