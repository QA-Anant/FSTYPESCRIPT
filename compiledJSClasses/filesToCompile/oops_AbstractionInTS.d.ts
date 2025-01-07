declare abstract class Person {
    name: string;
    age: number;
    constructor(name: string, age: number);
    display(): void;
    abstract show(): void;
}
declare class Labourer extends Person {
    constructor(name: string, age: number, empCode: number);
    show(): void;
    empCode: number;
    wages(): void;
}
declare const labourer: Labourer;
