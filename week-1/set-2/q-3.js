// Write a function that takes an object person and a number num as 
// arguments and returns true if the person's age plus num is greater than 21. 
// Otherwise, it should return false.

// Your ES6 code here

const isEligible = (personObj, ageOp) => personObj.age + ageOp >21;

const person1 = { name: 'Ajay', age: 20 };
const person2 = { name: 'Vijay', age: 30 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person2, 2)); // true