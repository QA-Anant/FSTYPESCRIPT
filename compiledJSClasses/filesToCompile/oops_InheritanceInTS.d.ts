declare class Animal {
    #private;
    name: string;
    protected color: string;
    constructor(name: string, age: number, color: string);
    walk(): void;
    eat(): void;
}
declare class Dog extends Animal {
    constructor(name: string, age: number, color: string);
    bark(): void;
}
declare const dog: Dog;
declare const animal1: Animal;
