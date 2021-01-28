// Creative Code Club
// Intro to Creative Coding
// Unit 3 - Functions
// Exercise 3.3 - Returning Values

// Functions don't just repeat code, they can
// also be used to calculate information in a
// simple and clean way! Let's use the 'return' statement.


// First, I set up some variables to use later.
let regularRandomNumber = 0;
let evenRandomNumber = 0;

function setup() {
  createCanvas(400, 400);
  
  regularRandomNumber = random(0, 400);
  evenRandomNumber = randomEvenNumber(0, 400);
  
  // Print out the values of these variables just so we can see them!
  print(regularRandomNumber);
  print(evenRandomNumber);
}

function draw() {
  background(220);
  
  circle(regularRandomNumber, 100, 50);
  circle(evenRandomNumber, 300, 50);
}

// Returns a random even number between two numbers.
function randomEvenNumber (low, high) {
  // Get a random number.
  let randNumber = random(low, high);
  
  // Gets the remainder after dividing by 2!
  let extra = randNumber % 2;
  
  return randNumber - extra;
}