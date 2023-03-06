//Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
	{name: "Ram", dept: "marketer"}, 
	{name: "Radha", dept: "SDE"},
	{name: "Shyam", dept: "finance professional"},
]

// Your code here
const greetEmployeeMessages = employeeData.map((obj) =>
  `Hi ${obj.name} we are glad to have you as a ${obj.dept}`)


console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']