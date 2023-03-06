// Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const people = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
  ];
  
  // Your code here
  
  const names = people.map((namesObj) => namesObj.name);
  
  console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']