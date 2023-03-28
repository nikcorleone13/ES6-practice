// Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// Your code here
const add = (num1,num2) => {
    return num1+ num2;
}
const delayedAddition = (a,b) =>{
    setTimeout(() =>{
        add(num1, num2) ;
    },4000)

    //setTimeout(add, 4000, num1, num2); ----> direct method for setimeout
    
    //    setTimeout((a,b) =>{
        // add(a,b);
    // },4000, num1,num2)
}
// 
delayedAddition(2, 3); 
// 5