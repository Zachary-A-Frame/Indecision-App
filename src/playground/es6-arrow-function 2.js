
// ES5 function
const square = function (x) {
    return x * x;
}

console.log(square(3));

// Same function with ES6
// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(10));

// Challenge - getFirstName

const fullName = 'Erika Gasper'
let firstName = '';


// ES6 Longhand syntax
// const getFirstName = (fullName) => {
//    return firstName = fullName.split(' ')[0]
// }

// console.log(getFirstName(firstName))


// ES6 Shorthand syntax
const getFirst = (fullName) => firstName = fullName.split(' ')[0]

console.log(getFirst(fullName))

