// Practising classes in typescript
// Classes are blueprints for objects
// Classes can have properties and methods
// Classes can have access modifiers
// Access modifiers are keywords that set the accessibility of properties and methods in a class
// Access modifiers are public, private, protected
// Public members can be accessed from outside the class
// Private members can't be accessed from outside the class
// Protected members can be accessed within the class and its subclasses
// By default, all members are public
// Access modifiers can be applied to properties and methods
// Access modifiers can be applied to constructors
// static variables and methods belong to the class itself, not to the instances of the class
// static members can be accessed using the class name

class Employee {

    public firstName: string;
    public yob : number;
    static companyName : string;
    #lastName : string; // private property

    static getInfo() {
        this.companyName = "ABC Corp";
        //this.firstName = "John"; // cannot access instance variable in static method
        //this.yob = 1990; // cannot access instance variable in static method

    }

    constructor(firstName:string, yob:number, lastName:string = "") {
        this.firstName = firstName;
        this.yob = yob;
        Employee.companyName = "XYZ Corp";
        this.#lastName = lastName;
    }

    public getAge(): number {
        return 2021 - this.yob;
    }

    public getFirstName(lastName : string): string {
        return this.firstName+" "+lastName;
    }

}

let emp = new Employee("John", 1990, "Wick");
//emp.lastName = "Doe"; // cannot access private property
console.log(emp.getAge());
console.log(emp.getFirstName("Doe"));
//console.log(emp.companyName); // cannnot access static variable using instance
console.log(Employee.companyName); // can access static variable using class name
Employee.getInfo();