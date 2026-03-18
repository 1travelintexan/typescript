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
// console.log(addTwoNumbers(2, 3));
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
const Ragnar = new Pet("Ragnar", "white");
// console.log(Ragnar);
//arrays
const pizzas = ["Pineapple", "Pepp", "four cheese"];
//tuple
const boss = ["Rocio", 1, true];
//******************functions and classes */
//1.Create a function with the function keyword that takes two parameters
// that calculate the area of a rectangle and return the string 'The area is XX'
//2.Create a arrow function that takes two parameters and calculates the area of a triangle
//it should return the  string 'The area is XX'
//3. Create a function that takes.... a binary number and converts it to a actual number
function calcAreaRect(num1, num2) {
    let totalArea = num1 * num2;
    return `The area of the Rectangle is... ${totalArea}`;
}
// console.log(calcAreaRect(5, 10));
const calcAreaTriangle = (num1, num2) => {
    const totalArea = (num1 * num2) / 2;
    return "The area of the triangle is..." + totalArea;
};
//11001001101
const convertBin = (num) => {
    let multiplier = 1;
    const strNum = num.toString();
    let actualNumber = 0;
    for (let i = strNum.length - 1; i >= 0; i--) {
        const currentNumber = Number(strNum[i]);
        actualNumber += currentNumber * multiplier;
        multiplier = multiplier * 2;
        // console.log({ actualNumber, currentNumber, multiplier });
    }
    return actualNumber;
};
// const ourPizza: Pizza = {
//   name: "Pineapple Pizza",
//   toppings: ["pineapples", "cheese", "dough"],
//   size: "small",
// };
//custom type Pizza
const pineapplePizza = {
    name: "Pineapple Pizza",
    toppings: ["pineapples", "cheese", "dough"],
    size: "small",
    //   smellsGood: () => {
    //     console.log("yes smells good");
    //   },
};
//single type for peppPizza example
const peppPizza = {
    name: "Pepp Pizza",
    toppings: ["Pepps", "cheese", "dough"],
    size: "large",
};
const person1 = {
    name: "Joshua",
    age: 39,
    nicePerson: false,
};
const driver1 = {
    name: "someone",
    age: 22,
    canDriveReallyFast: true,
};
