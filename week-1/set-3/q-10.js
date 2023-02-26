// Write an ES6 function to return sum of all numbers at even indices of the given array.

// Your ES6 code here

const sumOfEvenIndices = inputArray => {
    let sum = 0;
    for (let index = 0; index < inputArray.length; index++) {
        if (index %2 == 0 ){
            sum+=inputArray[index];
        }
       
    }
    return sum; 
}


console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30