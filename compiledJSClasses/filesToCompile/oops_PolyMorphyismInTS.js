// Polymorphism in TypeScript
// Polymorphism is the ability to call the same method on different objects and have each of them respond in their own way.
// In TypeScript, polymorphism is achieved through method overriding.
// Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already provided by its superclass.
// In the following example, the Animal class has a method called makeSound() that prints a message to the console.
// The Dog class extends the Animal class and overrides the makeSound() method to print a different message.
// The main function creates an instance of the Dog class and calls the makeSound() method on it.
// The output of the program is:
// Woof Woof!
// This demonstrates polymorphism in TypeScript, where the makeSound() method is called on different objects (Animal and Dog) and each of them responds in their own way.
// Animal class
class baseAnimal {
    makeSound() {
        console.log("Animal is making a sound");
    }
}
// Dog class extends Animal class
class animalDog extends baseAnimal {
    makeSound() {
        console.log("Woof Woof!");
    }
}
// main function
main();
function main() {
    let dog = new animalDog();
    dog.makeSound();
    let animal = new baseAnimal();
    animal.makeSound();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib29wc19Qb2x5TW9ycGh5aXNtSW5UUy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2ZpbGVzVG9Db21waWxlL29vcHNfUG9seU1vcnBoeWlzbUluVFMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLDJIQUEySDtBQUMzSCxxRUFBcUU7QUFDckUscUpBQXFKO0FBQ3JKLG1IQUFtSDtBQUNuSCw0R0FBNEc7QUFDNUcsaUdBQWlHO0FBQ2pHLGdDQUFnQztBQUNoQyxhQUFhO0FBQ2IseUtBQXlLO0FBQ3pLLGVBQWU7QUFFZixNQUFNLFVBQVU7SUFDWixTQUFTO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSjtBQUVELGlDQUFpQztBQUVqQyxNQUFNLFNBQVUsU0FBUSxVQUFVO0lBQzlCLFNBQVM7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQUVELGdCQUFnQjtBQUNoQixJQUFJLEVBQUUsQ0FBQztBQUVQLFNBQVMsSUFBSTtJQUNULElBQUksR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFDMUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRWhCLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDOUIsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3ZCLENBQUMifQ==