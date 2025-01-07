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
    firstName;
    yob;
    static companyName;
    #lastName; // private property
    static getInfo() {
        this.companyName = "ABC Corp";
        //this.firstName = "John"; // cannot access instance variable in static method
        //this.yob = 1990; // cannot access instance variable in static method
    }
    constructor(firstName, yob, lastName = "") {
        this.firstName = firstName;
        this.yob = yob;
        Employee.companyName = "XYZ Corp";
        this.#lastName = lastName;
    }
    getAge() {
        return 2021 - this.yob;
    }
    getFirstName(lastName) {
        return this.firstName + " " + lastName;
    }
}
let emp = new Employee("John", 1990, "Wick");
//emp.lastName = "Doe"; // cannot access private property
console.log(emp.getAge());
console.log(emp.getFirstName("Doe"));
//console.log(emp.companyName); // cannnot access static variable using instance
console.log(Employee.companyName); // can access static variable using class name
Employee.getInfo();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlc0luVHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9maWxlc1RvQ29tcGlsZS9jbGFzc2VzSW5Ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQ0FBbUM7QUFDbkMscUNBQXFDO0FBQ3JDLDBDQUEwQztBQUMxQyxvQ0FBb0M7QUFDcEMsZ0dBQWdHO0FBQ2hHLGtEQUFrRDtBQUNsRCx3REFBd0Q7QUFDeEQsMkRBQTJEO0FBQzNELHdFQUF3RTtBQUN4RSxxQ0FBcUM7QUFDckMsNERBQTREO0FBQzVELGtEQUFrRDtBQUNsRCw2RkFBNkY7QUFDN0Ysc0RBQXNEO0FBRXRELE1BQU0sUUFBUTtJQUVILFNBQVMsQ0FBUztJQUNsQixHQUFHLENBQVU7SUFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBVTtJQUM1QixTQUFTLENBQVUsQ0FBQyxtQkFBbUI7SUFFdkMsTUFBTSxDQUFDLE9BQU87UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5Qiw4RUFBOEU7UUFDOUUsc0VBQXNFO0lBRTFFLENBQUM7SUFFRCxZQUFZLFNBQWdCLEVBQUUsR0FBVSxFQUFFLFdBQWtCLEVBQUU7UUFDMUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixRQUFRLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVNLFlBQVksQ0FBQyxRQUFpQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRyxHQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0NBRUo7QUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLHlEQUF5RDtBQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLGdGQUFnRjtBQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztBQUNqRixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMifQ==