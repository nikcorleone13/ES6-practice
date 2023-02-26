// Write a function findPerson that takes an array of person objects and a 
// name as parameters and returns the object with the matching name, 
// or null if not found.

// Your ES6 code here

// const findPerson = (personObj , targetName) => personObj.name == targetName ? ${personObj.name} : 'false';


const findPerson = (personObj , targetName) => {
    for (let index = 0; index < personObj.length; index++) {
        if(personObj[index].name == targetName )
        {
            return personObj[index];
        }        
    }
    return null;
}
console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"));