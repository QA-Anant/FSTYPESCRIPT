declare class employee {
    #private;
    constructor(name: string, id: number);
    getemployeeId(): number;
    getemployeeName(): string;
    setemployeeName(name: string): string;
    setemployeeId(id: number): number;
}
declare const emp1: employee;
