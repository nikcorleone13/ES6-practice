// Write an ES6 function that takes an array of objects and a property name and returns a new array 
// with only the values of that property. Avoid using in-built methods.

// Your ES6 code here

const getValues = (arrayInput, valueName) => {
    // console.log(arrayInput);
    // const operations = [...arrayInput];
    // console.log(operations);

    let result = [];
    for (let index = 0; index < arrayInput.length; index++) {
        // console.log('here');
        result[index] = arrayInput[index][valueName];
        // console.log( result);

    }
    return result;
};


console.log(
    getValues(
      [
        { name: "John", age: 21 },
        { name: "Mary", age: 22 },
        { name: "Peter", age: 23 },
      ],
      "name"
    )
  ); // ["John", "Mary", "Peter"]