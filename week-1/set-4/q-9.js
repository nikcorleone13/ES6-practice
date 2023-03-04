// Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = { 
    title: 'JavaScript: The Definitive Guide',  
    authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
    publisher: {name: 'O\'Reilly Media', location: 'CA'}
};

// Your ES6 code here
const { title, 
    authors: [
          {name: author1, age: age1} , 
          {name: author2, age: age2}
             ], 
    publisher:
            {name:publisherName,location:locationName}
  } = book ;

console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan 
console.log(author2); // David Flanagan 
console.log(publisherName); // O'Reilly Media
console.log(locationName); // CA



