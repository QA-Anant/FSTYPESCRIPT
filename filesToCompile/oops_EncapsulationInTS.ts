// encapsulation in TypeScript
// public, private, protected

class employee{
     #employeeName: string;
     #employeeId: number;

    constructor(name: string, id: number){
        this.#employeeName = name;
        this.#employeeId = id;
    }

    public getemployeeId(): number{
        return this.#employeeId;
    }

    public getemployeeName(): string{
        return this.#employeeName;
    }

    public setemployeeName(name: string):string{
        return this.#employeeName = name;
    }

    public setemployeeId(id: number):number{
        return this.#employeeId = id;
    }



}

const emp1 = new employee('John', 101);
//emp.#employeeName = 'Doe'; // error because it is private member of class employee

console.log(emp1.getemployeeName());
console.log(emp1.getemployeeId());

