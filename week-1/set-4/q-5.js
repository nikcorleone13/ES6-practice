// Write an ES6 function that takes an array of strings and 
// returns a new array with each string capitalized.

// Your ES6 code here

const capitalizeWords = arrayInput => {
    
    let operation = [];
    let result = [];
    for (let index = 0; index < arrayInput.length; index++) 
    {
        operation = arrayInput[index].toUpperCase();
        result[index] = operation;
    }
    return result;
}


console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]