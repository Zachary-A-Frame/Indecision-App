// NOT a function - Definding our class. 
class Person {
    // Must use ES6 method definition syntax.
    constructor(name = 'Anonymous', age = 0) { // Here's a default 'Anonymous'
        // This refers to class instance.
        this.name = name
        this.age = age
    }
    getGreeting() {
        // return 'Hi, I am ' + this.name + '!' Below is a template string. Injection of javascript expressions === good.
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `User's name is ${this.name}. They are ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        // WE need to call the PARENT function, since this is an extended class. 
        super(name, age);
        this.major = major
    }
    hasMajor() { // Checks if they have a major.
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription()

            if (this.hasMajor()) {
                description += ` Their major is ${this.major} `
            }
        return description;
    }
}

// Traveler -- Extend the Person class. 
// Add support for homeLocation. 
// Override getGreeting
// 1. Hi. I am Zachary Frame. -> I'm visiting from Philadelphia.
// 2. Hi. I am Zachary Frame. (If not a traveler).

class Traveler extends Person {
    constructor(name, age, traveler, homeLocation) {
        super(name, age)
        this.traveler = true
        this.homeLocation = homeLocation
    }
    isTraveling() {
        return !!this.traveler
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if (this.isTraveling()) {
            greeting += ` They are from ${this.homeLocation}`
        }
        return greeting
    }
}

// Create a new instance of class - use 'new' -- Can pass in strings, numbs, booleans, etc
const alex = new Traveler ('Alex Frame', 32, true, "Cleveland")
console.log(alex.getGreeting())


const me = new Person('Zachary Frame', 26);
console.log(me.getDescription());


const other = new Person();
console.log(other);

const you = new Student('Erika Gasper', 25, 'Computer Science')
console.log(you.getDescription())
console.log(you.hasMajor())