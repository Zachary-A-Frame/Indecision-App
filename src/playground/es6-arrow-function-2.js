// arguments object - no longer bound with arrow functions 

// this keyword - no longer bound

const add = (a, b) => {
    return a + b;
}

// console.log(add(55, 1))
// this keyword - no longer bound

/*const user = {
    name: 'Zach',
    cities: ['Cleveland', 'Medina', 'Columbus'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!')
        
        // const cityMessages = this.cities.map((city) => {
       //     return this.name + ' has lived in ' + city + '!';
        //})
       //  return cityMessages; // Longhand for above
    }
} */
// We now have access to this.name and this.cities
// console.log(this.name);
// console.log(this.cities);
// THIS WONT WORK
// this.cities.forEach(function (city) {
//    console.log(this.name + ' has lived in ' + city)
// BUT THIS WILL!
//  this.cities.forEach((city) => {
//   console.log(this.name + ' has lived in ' + city);
// console.log(user.printPlacesLived());



const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied. Use map.

    numbers: [3, 5, 7],
    multiplyBy: 2,
    multiply() { 
        return this.numbers.map((outcome) => outcome * this.multiplyBy); 
    }
}

console.log(multiplier.multiply());