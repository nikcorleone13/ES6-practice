// Write a function that takes two strings as input and 
// concatenates them together.
// Your ES6 code here

const concatenateStrings = (inputString1 , inputString2 ) => {
    const [...concatenateStringAnswer] = [ inputString1, inputString2];
    return (concatenateStringAnswer.join(''));
}

console.log(concatenateStrings("hello", "world")); // "helloworld"