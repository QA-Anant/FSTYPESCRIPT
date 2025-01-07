// Run: tsc filesToCompile/oops_InheritanceInTS_AnimalClass.ts
// Output: filesToCompile/oops_InheritanceInTS_AnimalClass.js
// Practice: Inheritance in TypeScript
class Animal {
    name;
    #age; // Private field
    color; // Protected field
    constructor(name, age, color) {
        this.name = name;
        this.#age = age;
        this.color = color;
    }
    walk() {
        console.log(this.name + " is walking");
    }
    eat() {
        console.log(this.name + " is eating");
    }
}
class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age, color);
    }
    bark() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib29wc19Jbmhlcml0YW5jZUluVFMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9maWxlc1RvQ29tcGlsZS9vb3BzX0luaGVyaXRhbmNlSW5UUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQ7QUFDOUQsNkRBQTZEO0FBQzdELHNDQUFzQztBQUV0QyxNQUFNLE1BQU07SUFDUixJQUFJLENBQVM7SUFDYixJQUFJLENBQVMsQ0FBQyxnQkFBZ0I7SUFDcEIsS0FBSyxDQUFTLENBQUMsa0JBQWtCO0lBQzNDLFlBQVksSUFBWSxFQUFFLEdBQVcsRUFBRSxLQUFhO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxHQUFHO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDSjtBQUdELE1BQU0sR0FBSSxTQUFRLE1BQU07SUFDcEIsWUFBWSxJQUFZLEVBQUUsR0FBVyxFQUFFLEtBQWE7UUFDaEQsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNKO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6QyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDVixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFHWCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25ELHNIQUFzSDtBQUN0SCxPQUFPLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUN6QiwwR0FBMEc7QUFDMUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2YsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2Qsb0ZBQW9GIn0=