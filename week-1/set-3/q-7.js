// Write a function to return the last 5 characters as an array from the given array.

// Your ES6 code here

const printLastFive = arrInput => {
    const begin = arrInput.length -5;
    const result = arrInput.slice(begin , arrInput.length);
    return result;
}
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8,12,13,14,15]))
// [1, 2, 3, 5, 8]