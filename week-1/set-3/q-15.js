// Create a function which takes a product object and returns a 
// sentence about the product using ES6 features.

// Your ES6 code here

const printProductDetails = productInfo => productInfo.name + ' which is of ' + 
productInfo.specification.size + ', has a capacity of ' +productInfo.specification.capacity;



const product = {
    name: "Apple MacBook Air 2020",
      specification: {
          capacity: "256GB",
        size: "13.3 Inch"
      },
    price: 82900
  }
  console.log(printProductDetails(product)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.