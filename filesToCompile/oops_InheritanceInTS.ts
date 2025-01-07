// Run: tsc filesToCompile/oops_InheritanceInTS_AnimalClass.ts
// Output: filesToCompile/oops_InheritanceInTS_AnimalClass.js
// Practice: Inheritance in TypeScript

class Animal{
    name: string;
    #age: number; // Private field
    protected color: string; // Protected field
    constructor(name: string, age: number, color: string){
        this.name = name;
        this.#age = age;
        this.color = color;
    }

    walk(): void{
        console.log(this.name + " is walking");
    }

    eat(): void{
        console.log(this.name + " is eating");
    }
}


class Dog extends Animal{
    constructor(name: string, age: number, color: string){
        super(name, age, color);
    }

    bark(): void{
        console.log(this.name + " is barking");
    }
}

const dog = new Dog("Tommy", 5, "Brown");
dog.walk();
dog.eat();
dog.bark();


const animal1 = new Animal("Animal1", 10, "Black");
//animal1.color = "White"; Property 'color' is protected and only accessible within class 'Animal' and its subclasses.
animal1.name = "Animal2";
//animal1.age = 15; // Error: Property 'age' is private and only accessible within class 'Animal'.ts(2341)
animal1.walk();
animal1.eat();
//animal1.bark(); // Error: Property 'bark' does not exist on type 'Animal'.ts(2339)