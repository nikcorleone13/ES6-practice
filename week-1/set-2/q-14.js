// Write a function that takes an array and returns the 
// sum of first and last element.

// Your ES6 code here

const sumFirstAndLast = ( [first, ...restElements ]) => first + restElements.pop();

console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9