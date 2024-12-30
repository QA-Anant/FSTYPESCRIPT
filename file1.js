// Learning Typescript
// Basic building blocks of typescript
// 1. Primitive types
// a. number
var age = 20;
// b. string
var name1 = "John";
// c. boolean
var isMarried = false;
// d. void
function sayHello() {
    console.log("Hello there, let's learn typescript");
}
sayHello();
// e. null
var nullValue = null;
// f. undefined
var undefinedValue = undefined;
// 2. Arrays
var names = ["John", "Doe", "Smith"];
names.push("Anant");
console.log(names);
var ages = [20, 30, 40];
ages.push(50);
console.log(ages);
// 3. Functions
function calculateMyAge(age) {
    return age + 1;
}
function getName(name) {
    return name;
}
var firstname = getName("Anant");
console.log(firstname);
console.log(calculateMyAge(20)); // 201
// 4. Objects
var person = {
    firstname: "Anant Jain",
    age: 34
};
console.log(person);
var employee = {
    name: "Anant Jain",
    age: 34,
    isMarried: true
};
// 5. Classes
// 6. Interfaces
