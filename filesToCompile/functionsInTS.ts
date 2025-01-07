// Function Declaration
function fx (a:number, b:number):number {
    return a + b;

}

// Function Expression or Anonymous Function
const f2 = function (a:number, b:number):number {
    return a + b;
}

// Arrow Function
const f3 = (a:number, b:number):number => {
    return a + b;
}

const f4 = (a, b) => {
    return a + b;
}


console.log(f4('a', 'b')); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Function with default parameters

function f5(a:number, b:number = 10):number {
    return a + b;
}

console.log(f5(5)); // Output: 15

// Function with optional parameters

function f6(a:number, b?:number):number {
    return a + 0;
}

console.log(f6(5)); // Output: NaN

// Function with rest parameters

function f7(...args:number[]):number {
    let sum = 0;
    args.forEach((arg) => {
        sum += arg;
    });
    return sum;
}

console.log(f7(1, 2, 3)); // Output: 6

// Function with function as parameter

function f8(a:number, b:number, callback:(a:number, b:number) => number):number {
    return callback(a, b);
}

console.log(f8(5, 10, f2)); // Output: 15

// Function with function as return type

function f9(): (a:number, b:number) => number {
    return f2;
}

console.log(f9()(5, 10)); // Output: 15

// Function with function as parameter and return type

function f10(callback:(a:number, b:number) => number): (a:number, b:number) => number {
    return callback;
}

console.log(f10(f2)(5, 10)); // Output: 15

// Function with function as parameter and return type with different parameter types

function f11(callback:(a:number, b:number) => number): (a:string, b:string) => string {
    return (a, b) => {
        return a + b;
    }
}

console.log(f11(f2)('a', 'b')); // Output: ab


// function as data type

type functionWith2Inputs = (a:number, b:number) => number;

function calculate(n1:number, n2: number, cb:functionWith2Inputs, d: objectWith2Properties):number{
   return cb(n1, n2);
}

function sum(n1:number, n2:number):number {
    return n1 + n2;
}

function minus(n1:number, n2:number):number {
    return n1 - n2;
}

function print(){
    console.log('Hello');
}


// datatype to an object and returning it from function.

type objectWith2Properties = {name:string, age:number};

const obj: objectWith2Properties = { 
    name: 'John', 
    age: 30 
};


// const value = calculate(10, 20, print); Argument of type '{ (): void; (): void; }' is not assignable to parameter of type '(a: number, b: number) => number'.
//  Type 'void' is not assignable to type 'number'.

const value = calculate(10, 20, sum, obj); // ensuring that the function passed is of type (a:number, b:number) => number to avoid runtime errors and datatype safety
console.log(value); // Output: 30



