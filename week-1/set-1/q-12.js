// Create an object book with properties title, author, and pages. 
// Create a function getBookDetails that takes a book object as a parameter 
// and returns if the book has more than 100 pages.

// Your ES6 code here

const book ={
    book1 : {
        "title" : "The Invisble Guest",
        "author" : "Charlie Tango",
        "pages" : 1023,
    },
    book2 : {
        "title" : "The Invisble Guest",
        "author" : "Charlie Tango",
        "pages" : 90,
    }
}

const getBookDetails = book => book.pages > 100? 'More than 100' : 'Less than 100';

console.log(getBookDetails(book.book1)) // logs 'true' if the pages are above 100
console.log(getBookDetails(book.book2)) // logs 'false' if the pages are 100 or below