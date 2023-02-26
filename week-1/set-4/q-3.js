// write an ES6 function that takes an array of numbers and 
// converts even numbers to odd numbers by adding 1 to that number.

// Your ES6 code here
const convertEvenToOdd = arrayInput =>{
    for (let index = 0; index < arrayInput.length; index++) {
        if (arrayInput[index] %2 == 0){
            arrayInput[index] = arrayInput[index] +1;
        }        
    }
    return arrayInput;
}


var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]