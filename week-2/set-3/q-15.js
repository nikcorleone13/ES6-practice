// Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers = [10, 5, 8, 3, 6];

// Your code here

const getMinimumNumber = numbers => numbers.reduce((min, curr) => curr < min? min = curr : min );

console.log(getMinimumNumber(numbers)); 
// Output: 3