// ============================================Increment and decrement

// Increment and decrement operators in JavaScript are unary operators that add or subtract one from their operand,
//  respectively. They can be used in prefix or postfix form.


// ===============================================Increment Operator (++):

// Postfix: x++ returns the current value of x and then increments x by 1.
// Prefix: ++x increments x by 1 and then returns the new value of x.

// Example: 
let x = 5;
let y = x++; // y is 5, x is 6
let z = ++x; // z is 7, x is 7


//===============================================Decrement Operator (--):

// Postfix: x-- returns the current value of x and then decrements x by 1.
// Prefix: --x decrements x by 1 and then returns the new value of x.

// Example:
let a = 10;
let b = a--; // b is 10, a is 9
let c = --a; // c is 8, a is 8


// Note: 
// Increment and decrement operators are often used in loops and counters. 


// Example: 
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }
  
  let j = 5;
  while (j > 0) {
    console.log(j); // Output: 5, 4, 3, 2, 1
    j--;
  }