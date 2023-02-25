// Write a function that takes a number as input and 
// determines if it is between 1 and 10.

// Your ES6 Code here

const isBetweenOneAndTen = number => ((number >1) && (number <10))? 'Yes in between' : 'Not in between';

console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(11)); // false