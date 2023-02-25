// Console individual values of the product object using object destructuring.

const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
  }
  
  // Your ES6 code here
  
  const { title, price , description , fgg} = product;
  
  console.log(title); // iPhone
  console.log(price); // 5999
  console.log(description); // The iPhone is a smartphone developed by Apple


//   we first define a product object with three properties: name, price, 
//   and color. Then, we use object destructuring to create 
//   three variables (name, price, and color) and assign them 
//   the values of the corresponding properties of the product object.

// Finally, we log the values of these variables using console.log(), 
// which will output the values of the name, price, and color properties of the 
// product object to the console.