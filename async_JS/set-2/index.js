let outputDiv = document.getElementById("output");
// outputDiv.style.color = "red";
console.log('outputDiv: ', outputDiv);

// q-10
const fakeFetch = (url, dimensions) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/getImage") {
          resolve({
            status: 200,
          data: {
             image: {
                link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
              title: "Random Image"
            }
          }
        });
      } else {
          reject({
            status: 404,
          message: "No photo of such dimension found"
        });
      }
    }, 2000);
  });
  }
  
  // your code here
  
  fakeFetch("https://example.com/getImage", [1920,1080]).then( response => {
    outputDiv.innerHTML = `<img src = ${ response.data.image.link }></img>`;

  }).catch( error => {
    outputDiv.innerHTML = `${error.message}`;
  });
  // Output on the DOM should be an image.







// q-7

// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/api/users") {
//           reject({
//             status: 500,
//             message: "Internal Server Error"
//         });
//       } else {
//           resolve({
//             status: 200,
//           data: {
//               message: "Success"
//           }
//         });
//       } 
//     }, 1000);
//   });
//   };
  
//   // Your Code here
//   fakeFetch("https://example.com/api/users").then( response =>console.log("success", response)).catch( fakeresponse => 
//   {
//       if( fakeresponse.status === 500 ){
//         outputDiv.innerHTML = `Unexpected Error. Please try again.`;
//         console.log("rejected--->",fakeresponse);
        
//         }});
  // Output on the DOM should be (in red color): 
  // Oops. Unexpected Error. Please try again.






// q-6

// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/api/productlist") {
//           resolve({
//             status: 200,
//             message: "Success",
//             data: [
//               { itemName: "Shoes", price: 100, quantity: 2 },
//               { itemName: "Hat", price: 350, quantity: 1 },
//               { itemName: "Tshirt", price: 410, quantity: 5 }
//             ]
//           });
//         } else {
//           reject({
//             status: 404,
//             message: "Items list not found."
//           });
//         }
//       }, 2000);
//     });
//   };
  
//   // Your Code here
//   fakeFetch("https://example.com/api/productlist").then( response => {

//     let price = response.data.reduce((sum,current) => sum+= (current.price * current.quantity), 0);
//     outputDiv.innerHTML = `Total: INR ${price}`
//   }).catch(err => console.log(err));
  // Output on the DOM should be:
  // Total: INR 2600




// // q-5
// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/photo") {
//           resolve({
//             status: 200,
//             data: {
//               photo: {
//                 link: "https://source.unsplash.com/featured/300x201",
//                 title: "Random Image"
//               }
//             }
//           });
//         } else {
//           reject({
//             status: 404,
//             message: "No order found"
//           });
//         }
//       }, 2000);
//     });
//   };
  
//   // your code here
//   fakeFetch("https://example.com/photo").then( response => {
//         if(response.status ===200){
//             outputDiv.innerHTML = `<img src= "${response.data.photo.link}" ></img>`
//         }
//   }).catch(err => console.log(err));
//   // Output: an image on the DOM



// q-4
// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/order/status/OR00A12") {
//           resolve({
//             status: 200,
//             data: {
//               order: {
//                 orderId: "OR00A12",
//                 status: "delivery pending",
//                 userName: "Kajal Kumari"
//               }
//             }
//           });
//         } else {
//           reject({
//             status: 404,
//             message: "No order found"
//           });
//         }
//       }, 2000);
//     });
//   };
  
//   // your code here
//   fakeFetch("https://example.com/order/status/OR00A12").then( response =>{
//     console.log(response.data.order.userName,response.data.order.status);      
//   outputDiv.innerHTML = `Hello ${response.data.order.userName} you order status is ${response.data.order.status}.`
//   }).catch(err => console.log(err));
  // Output on the DOM should be:
  // Hello Kajal Kumari your order status is delivery pending.

// q-3
// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/login") {
//           resolve({
//             status: 200,
//             data: {
//               auth: true
//             }
//           });
//         } else {
//           reject({
//             status: 404,
//             message: "Status not found"
//           });
//         }
//       }, 2000);
//     });
//   };
  
//   // your code here

//   fakeFetch("https://example.com/login").then(response =>{
//     if(response.status === 200){
//         outputDiv.innerHTML = `Verified`
//     } 
//   }).catch(errorMsg => console.log("error is", err));
  
  // Output on the DOM should be:
  // Verified
// q-2
// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === "https://example.com/winner-team") {
//           resolve({
//             status: 200,
//             data: {
//               message: "Success",
//               data: ["Jhon", "Raju", "Anjali", "Sakshi"]
//             }
//           });
//         } else {
//           reject({
//             status: 404,
//             message: "No Users found."
//           });
//         }
//       }, 2000);
//     });
//   };
  
//   // your code here
//   fakeFetch("https://example.com/winner-team").then( (response) =>{
//         console.log(response.data.data);
//     let names = (response.data.data).join(', ');
//     console.log(names);
//     outputDiv.innerHTML = `Congratulation to the members of winning team ${names}, great work keep it up`
//     }).catch(err => console.log(err));
  // Output on the DOM should be:
  // Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.







// q-1 const arr = [1, 2, 3];
// console.log(arr.join(''));
// const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (url === "https://example.com/post/comments") {
//                 resolve({
//                     status: 200,
//                     message: "Success",
//                     data: [
//                         { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
//                         {
//                             email: "hello@outlook.com",
//                             commentBody: "Good going a lot to learn from you awesome"
//                         },
//                         {
//                             email: "ram99@gmail.com",
//                             commentBody: "Anyone from Vadodara here"
//                         }
//                     ]
//                 });
//             } else {
//                 reject({
//                     status: 404,
//                     message: "No Commentes found."
//                 });
//             }
//         }, 1000);
//     });
// };

// // your code here
// fakeFetch("https://example.com/post/comments").then(response => {
//     console.log(response.data);
//     outputDiv.innerHTML = `<ol>
//     ${response.data.map((item) =>
//         `<li>${item.email}</li>`).join('')}
//     </ol>`


// }).catch(err => 
//     console.log("Error is ", err));

// })
//   // Output on the DOM should be:
//   // 1. xyz@gmail.com
//   // 2. hello@outlook.com
//   // 3. ram99@gmail.com