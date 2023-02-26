// write an ES6 function that takes an array of words and returns 
// an array with all its elements whose length is greater than 5.

// Your ES6 code here

const filterWords = arrayInput =>{
    let result = [];
    let indexOp =0 ;
    for (let index = 0; index < arrayInput.length; index++) {
        let  [...operation] = arrayInput[index];
            // console.log(operation);
            if( operation.length > 5){
                result[indexOp] = arrayInput[index];
                ++indexOp;
            }
    }
    return result;
}

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) // ["repeat", "community"]