// Write an ES6 function to return the first element which is a multiple of 5 in the given array.

// Your ES6 code here

const printMultipleOfFive = inputArray => {
    let resultIndex = 0;
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] %5 == 0){
            resultIndex = index;
            break;
        }        
    }
    return inputArray[resultIndex]
}

console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5