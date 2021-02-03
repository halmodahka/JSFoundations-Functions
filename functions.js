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

function isOdd(n) {
  if (n % 2 === 1)
    return true;

    else {
      return false;
    }
  }
  console.log(isOdd(42));
  console.log(isOdd(51));


/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */




function oddsSmallerThan(n) {
  return parseInt(n/2);
   }
 console.log(oddsSmallerThan(7));
 console.log(oddsSmallerThan(15));


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


function squareOrDouble(n) {
  if (n % 2 === 1){
    return(n**2);
  }else {
    return(n+n);
  }
}
console.log(squareOrDouble(7));
console.log(squareOrDouble(4));


module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };