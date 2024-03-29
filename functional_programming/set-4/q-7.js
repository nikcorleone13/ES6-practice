// Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
    {name: 'Jeena', age: 25},    
    {name: 'Priya', age: 30}, 
    {name: 'Naina', age: 45}
]
// Your code here

const oldestPersonName = inputArr => inputArr.reduce((ageMax, people) => people.age > ageMax.age ? people : ageMax)?.name;


console.log(oldestPersonName(people)); 
// Output: 'Naina'