// Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.

const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]
// Your code here

const isNamesGreaterThan8 = names => names.find((name) => name.length > 8)
console.log(isNamesGreaterThan8(names));
// Output: "Geetanjali"