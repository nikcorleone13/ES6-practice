// Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

const fakeFetch = (msg, shouldSucceed) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        shouldSucceed === 1 ? 
            resolve(`message from server: ${msg} + apple`) :
        reject(`error from server: ${msg}`);
      }, 3000);
    });
  };
  
  // Your Code here
  
fakeFetch("hiiiii from func", true).then((msg) =>{
    console.log(msg)
}).catch((error) =>{
    console.log(error)
})

  // Hi -- after 3 seconds