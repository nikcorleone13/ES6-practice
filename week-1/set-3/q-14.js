// Create a function which takes in the given object and returns a 
// sentence which indicates name of the person and where the person lives.

// Your ES6 code here

const printData = userData => userData.name + ' lives in ' + userData.country;


const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
  }
  console.log(printData(userData1)); // Gaurav lives in Japan
  
  
  const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
  }
  console.log(printData(userData2)); // Pritam lives in India