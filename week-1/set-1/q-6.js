// Write a function that takes a string as input 
// and determines if it is longer than 5 characters.

// Your ES6 code here
const checkLength = word => {
    let counter = 0;
    for ( let index = 0; index < word.length; index++) 
    {
        counter++;
    }
    if(counter < 5){
        return("Less than 5");
    }
    else if (counter > 5){
        return ("More than 5");
    }
    else{
        return ("Exactly 5");
    }
        
}


console.log(checkLength("Programming")) // more than 5 characters 
console.log(checkLength("Jeep")) // less than 5 characters 