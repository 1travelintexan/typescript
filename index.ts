//implicit data type (you dont specify the type)
let petName = "Ragnar";
// petName = 5
//explicit data type (you tell it exactly what type)
let petAge: number = 5;
petAge = 10;
// console.log(petAge);

//functions
//with the function keyword
function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
//arrow function
const subtractTwoNumbers = (num1: number, num2: number): void => {
  console.log(num1 - num2);
};
console.log(addTwoNumbers(2, 3));

//classes
//define the type of the properties before the constructor

class Pet {
  name: string;
  age?: number | string;
  color: string;
  constructor(name: string, color: string, age: number | string) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}
//create a new instance of the class Pet
const Ragnar = new Pet("Ragnar", undefined, "white");
console.log(Ragnar);

//arrays
const pizzas: (string | number)[] = ["Pineapple", "Pepp", "four cheese"];

//tuple
const boss: [string, number, boolean] = ["Rocio", 1, true];

//******************functions and classes */
