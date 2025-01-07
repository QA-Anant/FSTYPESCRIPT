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

class baseAnimal{
    makeSound(): void{
        console.log("Animal is making a sound");
    }
}

// Dog class extends Animal class

class animalDog extends baseAnimal{
    makeSound(): void{
        console.log("Woof Woof!");
    }
}

// main function
main();

function main(){
    let dog = new animalDog();
    dog.makeSound();
    
    let animal = new baseAnimal();
    animal.makeSound();
}

