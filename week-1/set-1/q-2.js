// Write a function that takes two numbers as input and 
// determines which one is greater.

// Your ES6 code here

// approach-1 (returns either 'true' or'false')
// const isGreater = (a,b) => a>b


// approach-2
const isGreater = (a, b) => {

    if (a > b) {
      console.log(a + " is greater than " + b);
    }
    else if (b > a) {
      console.log(b + " is greater than " + a);
    }
    else
      console.log("both are equal");
  
  }
  
  console.log(isGreater(2, 5)); // 5 is greater than 2
  console.log(isGreater(10, 5)); // 10 is greater than 5
  console.log(isGreater(5, 5)); //both are equal