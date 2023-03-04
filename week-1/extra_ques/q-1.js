// Write a arrow function which takes an object and prints the particular sentence
// My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board.

const obj ={
    name: 'Lewis Smith',
    school: {
        board:['CBSE'],
        marks: [{
            subject: 'Math',
            percent: 99
        },
                {
            subject: 'Computer',
            percent: 96
        }]}
}


const funct = ({name, 
                school: { board, marks:[
                            {subject : subject1, percent: percent1}, 
                            {subject : subject2, percent: percent2}
                                       ]
                        }
}) => `My name is ${name}. I scored ${percent1} in ${subject1} and I scored ${percent2} in ${subject2} from ${board} board.`;


console.log(funct(obj));                       