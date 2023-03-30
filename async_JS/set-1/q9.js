// Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
	    if (url === "https://example.com/api/data") {
	      reject({
	        status: 500,
	        message: "Internal Server Error"
	      });
	    } else {
	      resolve({
	        status: 200,
	        data: {
	          message: "Success"
	        }
	      });
	    }
	  }, 2000);
	});
};

// Your Code here

fakeFetch("https://example.com/api/data").then( response =>{
    console.log("Success");
}).catch(error =>{
    error.status === 500? console.log("Internal Server Error! The server crashed. Please try again in some time.") :
    console.log("Error");
});

// Output on the DOM should be: 
// Internal Server Error! The server crashed. Please try again in some time.