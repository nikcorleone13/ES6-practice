// Convert the function getData, into an ES6 function with last amount 
// of characters.Hint: Destructuring

// function getData(person) {
//     const name = person.name;
// 		const address = person.address.city
//     console.log(name); // John Doe
//     console.log(address); // New York
// }

const getData = personObj =>{
    const [name, address] = [person.name, person.address.city]; //destructuring

    console.log(name); // John Doe
    console.log(address); // New York
}


const person = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
  },
};
getData(person);