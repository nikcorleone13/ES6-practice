// Write an ES6 function to multiply and return all the elements of a given array.

const numbers = [1, 2, 3, 4, 5];
// Your code here

const product = numbInp => numbInp.reduce((sum, num) => sum *= num)

console.log(product(numbers));
// Output: 120