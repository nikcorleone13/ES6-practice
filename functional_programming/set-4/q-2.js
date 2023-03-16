// Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers = [1, 2, 3, 4, 5];
// Your code here

const sumSquares = num => num.reduce((sum, num) =>  sum += num*num )

console.log(sumSquares(numbers));
 // Output: 55 