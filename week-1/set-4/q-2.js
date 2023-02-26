// Write an ES6 function that takes an array of numbers and returns 
// the average of all the numbers. Avoid using in-built methods.

// Your ES6 code here

const calculateAverage = inputArray =>{
    let avg = 0;
    let sum = 0;   
    for (let index = 0; index < inputArray.length; index++) {
        sum += inputArray[index];
    }
    return sum/inputArray.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3