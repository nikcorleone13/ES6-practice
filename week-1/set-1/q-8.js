// Write a function that takes a string as input and 
// determines if it contains the word "hello".

// Your ES6 code here

const isHelloPresent = inputWord => inputWord.includes("Hello")? 'Yes' : 'NO';

// alternate way using include
// const isHelloPresent = (inputWord, targetText) => inputWord.includes(targetText)? 'Yes' : 'NO';


console.log(isHelloPresent("Hello World")) // true
console.log(isHelloPresent("World")) // false

// console.log(isHelloPresent("Hello World", "Hello")) // true
// console.log(isHelloPresent("hello World", "Hello")) // true
// console.log(isHelloPresent("World", "Hello")) // false