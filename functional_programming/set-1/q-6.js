// Write an ES6 function that takes an array of strings and returns an array with 
// only the strings that have a length greater than 5.

// Your ES6 function here

const filterLongStrings = arrInput => arrInput.filter((strInput) => strInput.length > 5)

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
console.log(filterLongStrings(fruits)); 
// Output: ["banana", "cherry", "watermelon", "pineapple"]

//using filter method to check instead of map() because the false values are also sent back
//  to the array