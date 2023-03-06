// Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
// Your code here

const studentNames = studentName.filter((name) => name.charAt(0) === 'A' || name.charAt(0)=== 'a');

console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]