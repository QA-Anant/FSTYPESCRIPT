// Learning Typescript
// Basic building blocks of typescript

// 1. Primitive types
    // a. number
    const age: number = 20

    // b. string
    let name1: string = "John"

    // c. boolean
    let isMarried: boolean = false

    // d. void
    function sayHello(): void {
        console.log("Hello there, let's learn typescript")
    }
    sayHello()

    // e. null
    let nullValue: null = null
    
    // f. undefined
    let undefinedValue: undefined = undefined

   
// 2. Arrays

let names: string[] = ["John", "Doe", "Smith"]
names.push("Anant")
console.log(names)
let ages: number[] = [20, 30, 40]
ages.push(50)

console.log(ages)

// 3. Functions
function calculateMyAge(age : number):number{
    return age + 1
}

function getName(name: string):string{
    return name
}

let firstname : string = getName("Anant")
console.log(firstname)

console.log(calculateMyAge(20)) // 201

// 4. Objects

let person :{firstname:string, age:number} = {
    firstname: "Anant Jain",
    age: 34
}

console.log(person)


let employee :{name:string, age:number, isMarried:boolean} = {
    name: "Anant Jain",
    age: 34,
    isMarried: true
}

// 5. Classes

// 6. Interfaces