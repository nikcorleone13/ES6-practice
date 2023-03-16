// Write an ES6 function that takes an array of objects representing 
// people and returns an array of their ages using the map method.

// Your ES6 function here

const getAges = objInput => objInput.map((obj) => obj.age);

const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 }
  ];
  const ages = getAges(people);
  console.log(ages); // Output: [25, 24, 29]