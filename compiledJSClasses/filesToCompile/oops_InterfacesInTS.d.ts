interface Creature {
    name: string;
    eat(food: string): void;
    talk(language: string): void;
}
declare class Horse implements Creature {
    name: string;
    constructor(name: string);
    eat(food: string): void;
    talk(language: string): void;
    walk(): void;
}
declare const horse: Creature;
