// Create a function that takes an array of strings as an argument and returns a 
// string that includes the number of items in the array and the first and last items.


// Your ES6 code here

const formatArray = ([first, ...arr]) => 'The array has ' + arr.length + ' items, and the first item is '
+ `"${first}"` + ' , and the last item is ' + `"${arr.pop()}"`;
;

const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".