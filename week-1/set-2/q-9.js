// Write a function that takes a string as input and returns the string in 
// all uppercase letters.

// Youe ES6 code here

const stringToUpperCase1 = stringInput => {
    const inputString = [...stringInput];
    // console.log(inputString);
    let upperString = [];
    
    for ( let i =0; i < inputString.length; i++)
    {
        // console.log(inputString[i]);
        upperString [i] = inputString[i].toUpperCase();
    }
    return upperString.join(''); //the absence of space indicates there is no space between elements
    // and they will be printed as a string.
}

console.log(stringToUpperCase1("hello")); // "HELLO"