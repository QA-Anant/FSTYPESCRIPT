// Learn interfaces in TypeScript
// Interfaces are used to define the structure of an object.
// An interface can have properties and methods similar to a class.
// An interface can be used to define the structure of an object.
class Horse {
    name;
    constructor(name) {
        this.name = name;
    }
    eat(food) {
        console.log("Horse eats " + food + "!");
    }
    ;
    talk(language) {
        console.log("Horse barks in " + language + "!");
    }
    walk() {
        console.log("Horse walks!");
    }
}
const horse = new Horse("Horse"); // Create a horse object with name "Horse" and type Creature 
horse.eat("grass");
horse.talk("neigh");
// horse.walk(); // Error: Property 'walk' is missing in type 'Creature' but required in type 'Horse'
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib29wc19JbnRlcmZhY2VzSW5UUy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2ZpbGVzVG9Db21waWxlL29vcHNfSW50ZXJmYWNlc0luVFMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLDREQUE0RDtBQUM1RCxtRUFBbUU7QUFDbkUsaUVBQWlFO0FBU2pFLE1BQU0sS0FBSztJQUNQLElBQUksQ0FBVTtJQUNkLFlBQVksSUFBYTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sR0FBRyxDQUFDLElBQWE7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFBQSxDQUFDO0lBRUssSUFBSSxDQUFDLFFBQWlCO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxJQUFJO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0o7QUFHRCxNQUFNLEtBQUssR0FBYyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDZEQUE2RDtBQUMxRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEIscUdBQXFHIn0=