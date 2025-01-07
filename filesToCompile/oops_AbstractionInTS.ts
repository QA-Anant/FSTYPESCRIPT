// Learn Abstraction in TypeScript
// Abstraction is a concept of hiding the implementation details and showing only functionality to the user.
// In TypeScript, we can achieve abstraction by using the abstract keyword.


abstract class Person{
    name: string;
    age: number;

    // Constructor with parameters 
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    // Concrete method
    display(): void{
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }

    // Abstract method
    abstract show(): void;
    
}

//const p1 = new Person("John", 30); // Cannot create an instance of an abstract class.

class Labourer extends Person{
    
    constructor(name: string, age: number, empCode: number){
        super(name, age); // Call the constructor of the super class i.e. Person class 
        this.empCode = empCode;
    }
    
    show(): void {
        throw new Error("Method not implemented.");
    }
    empCode: number;

    
    wages(): void{
        console.log(`Wages: ${this.empCode * 1000}`);
    }
}

const labourer = new Labourer("John", 30, 100);
labourer.display();
labourer.wages();


