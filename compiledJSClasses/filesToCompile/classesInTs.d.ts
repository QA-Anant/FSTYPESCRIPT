declare class Employee {
    #private;
    firstName: string;
    yob: number;
    static companyName: string;
    static getInfo(): void;
    constructor(firstName: string, yob: number, lastName?: string);
    getAge(): number;
    getFirstName(lastName: string): string;
}
declare let emp: Employee;
