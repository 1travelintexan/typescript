"use strict";
//implicit data type (you dont specify the type)
let petName = "Ragnar";
// petName = 5
//explicit data type (you tell it exactly what type)
let petAge = 5;
petAge = 10;
// console.log(petAge);
//functions
//with the function keyword
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
//arrow function
const subtractTwoNumbers = (num1, num2) => {
    console.log(num1 - num2);
};
console.log(addTwoNumbers(2, 3));
//classes
//define the type of the properties before the constructor
class Pet {
    constructor(name, color, age) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
//create a new instance of the class Pet
const Ragnar = new Pet("Ragnar", undefined, "white");
console.log(Ragnar);
//arrays
const pizzas = ["Pineapple", "Pepp", "four cheese"];
//tuple
const boss = ["Rocio", 1, true];
//******************functions and classes */
