// Learn Abstraction in TypeScript
// Abstraction is a concept of hiding the implementation details and showing only functionality to the user.
// In TypeScript, we can achieve abstraction by using the abstract keyword.
class Person {
    name;
    age;
    // Constructor with parameters 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Concrete method
    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
//const p1 = new Person("John", 30); // Cannot create an instance of an abstract class.
class Labourer extends Person {
    constructor(name, age, empCode) {
        super(name, age); // Call the constructor of the super class i.e. Person class 
        this.empCode = empCode;
    }
    show() {
        throw new Error("Method not implemented.");
    }
    empCode;
    wages() {
        console.log(`Wages: ${this.empCode * 1000}`);
    }
}
const labourer = new Labourer("John", 30, 100);
labourer.display();
labourer.wages();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib29wc19BYnN0cmFjdGlvbkluVFMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9maWxlc1RvQ29tcGlsZS9vb3BzX0Fic3RyYWN0aW9uSW5UUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsNEdBQTRHO0FBQzVHLDJFQUEyRTtBQUczRSxNQUFlLE1BQU07SUFDakIsSUFBSSxDQUFTO0lBQ2IsR0FBRyxDQUFTO0lBRVosK0JBQStCO0lBQy9CLFlBQVksSUFBWSxFQUFFLEdBQVc7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELGtCQUFrQjtJQUNsQixPQUFPO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBS0o7QUFFRCx1RkFBdUY7QUFFdkYsTUFBTSxRQUFTLFNBQVEsTUFBTTtJQUV6QixZQUFZLElBQVksRUFBRSxHQUFXLEVBQUUsT0FBZTtRQUNsRCxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsNkRBQTZEO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJO1FBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxPQUFPLENBQVM7SUFHaEIsS0FBSztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNKO0FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDIn0=