// Write a function that takes a string as input and
// determines if it contains the letter 'a' or ‘A’.

// Your ES6 code here

const checkForAlphabetA = (word) => {
  for (let i = 0; i < word.length; i++) 
  {
    if( word[i] =='a')
      return ("Includes A");
  } 
  return("Does not include A")


}

console.log(checkForAlphabetA("Tanay")) // Includes a
console.log(checkForAlphabetA("Jeep")) // Does not include a
console.log(checkForAlphabetA("Jane")) // Includes a 


