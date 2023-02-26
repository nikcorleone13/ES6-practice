// Write an ES6 function that accepts an array of integers and 
// returns the maximum element in the array. Avoid using in-built methods.

// Your ES6 code here

const getMaxElement = inputArray => {
    let max = 0;
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] > max){
            max =inputArray[index];
        }        
    }
    return max;
}

let array = [4,78,8,3,6,0,12,34]
console.log(getMaxElement(array)) // 78