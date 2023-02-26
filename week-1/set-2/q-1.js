// Create an object person with two properties, "name" and "age" and then 
// updates the "age" property to a new value. Initial age should be 30.

const person = {
    name: 'Hendrix',
    age: 30,
  }
  
  const changeAge = (person, newAge) => {
    person.age = newAge;
    return person;
  }
  
  console.log(changeAge(person, 44));