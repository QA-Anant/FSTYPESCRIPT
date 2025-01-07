// Learn interfaces in TypeScript
// Interfaces are used to define the structure of an object.
// An interface can have properties and methods similar to a class.
// An interface can be used to define the structure of an object.

interface Creature {
    name : string;
    eat(food : string): void;
    talk(language : string): void;
}


class Horse implements Creature {
    name : string;
    constructor(name : string){ // Constructor to initialize the name of the horse
        this.name = name;
    }

    public eat(food : string): void{
        console.log("Horse eats "+food+"!");
    };

    public talk(language : string): void {
        console.log("Horse barks in "+language+"!");
    }

    public walk(): void {
        console.log("Horse walks!");
    }
}


const horse : Creature = new Horse("Horse"); // Create a horse object with name "Horse" and type Creature 
horse.eat("grass");
horse.talk("neigh");
// horse.walk(); // Error: Property 'walk' is missing in type 'Creature' but required in type 'Horse'



