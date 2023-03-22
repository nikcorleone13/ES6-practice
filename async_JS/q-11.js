// Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user to make a fake fetch call and display a welcome message to the user on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile/NC002") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
            }
          });
        } else {
          reject({
            status: 404,
            message: "Resource not found"
          });
        }
      }, 2000);
    });
  };
  
  // Your Code here
  
  fakeFetch("https://example.com/api/profile/NC002").then(response =>{
    console.log("Welcome " + `${response.data.data.name}` + " from "+ `${response.data.data.institute}`)
  }).catch(error =>{
    console.log(error.message);
  })
  
  
  
  // Output on the DOM should be: Welcome!, Roshan from neoG Camp
  