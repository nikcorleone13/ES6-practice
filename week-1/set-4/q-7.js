// Write an ES6 function that takes the users' details and returns 
// the data with team ID. Avoid using in-built methods.

// Your ES6 code here

const podAndTeamAllocation = userData => {
    // let user
    userData['teamID'] = 667543;
    return userData;

}
    


const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}