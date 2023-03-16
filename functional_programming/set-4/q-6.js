// Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here

const longestString = strInput => strInput.reduce((longest, curr) => curr.length < longest.length ? longest : longest = curr)

console.log(longestString(strings)); 

// Output: 'Haule Haule'