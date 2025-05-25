// console.log("Hello world");

let name = "Dipto";
console.log(name);

let label = 2.3;
label = 2.4;
console.log(label);

// we use constants instead of variables for real world applications,
// because constants are immutable, meaning they cannot be changed after they are defined.

const pi = 3.14;
console.log(pi);

// premitive data types
let name_comp = "dipto";
let age = 25;
let isStudent = true;
let firstName = undefined; // undefined is a type and also a variable
let lastName = null; //for clearing the value of a variable

// referened data types (Objects, Arrays, Functions)

// Objects

let person = {
    name: "Dipto",
    age: 25,
    isStudent: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

// changing age of the person object
// Dot notation
person.age = 26;

// Bracket notation
person["age"] = 27;

console.log(person.age);

// Arrays

let fruits = ["Apple", "Banana", "Orange"];
// Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

// Functions

function greet(name) { // name is a parameter
    console.log("Hello, " + name + "!");
}

greet("Dipto"); // Dipto is an argument