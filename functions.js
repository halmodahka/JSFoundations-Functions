/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */

let Haya = "Haya";
let greeting = "Hello";

function greet(name) {
console.log(`${greeting} ${name}`);
}

greet(Haya);

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
let num1 = 42;
function isOdd(n) {
  // Your code here
  if (n % 2 === 1){
    console.log("true");}
    else
    console.log("false");
  }
 isOdd(num1);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
let num2 = 15;
function oddsSmallerThan(n) {
  // Your code here
 console.log(~~(n / 2.0));
  }
oddsSmallerThan(num2);
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */

let num3 = 7;
function squareOrDouble(n) {
  if (n % 2 === 1){
    console.log(n**2);
  }else {
    console.log(n*2);
  }
}
squareOrDouble(num3)
module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };