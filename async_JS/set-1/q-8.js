// Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/itemlistd") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { itemName: "Bread", price: 30, quantity: 10 },
              { itemName: "Water Bottle", price: 50, quantity: 50 },
              { itemName: "Dairy Milk", price: 20, quantity: 30 }
            ]
          });
        } else {
          reject({
            status: 404,
            message: "Items list not found."
          });
        }
      }, 2000);
    });
  };
  
  // Your Code here
  fakeFetch("https://example.com/api/itemlist").then((response) =>{
    console.log(response.data);
  }).catch((errorResponse) =>{
    console.log(errorResponse.message);
  })
  
  
  
  
  // Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
//   1. Bread -- INR 30 -- 10
//   2. Water Bottle -- INR 50 -- 50
//   3. Dairy Milk -- INR 20 -- 30