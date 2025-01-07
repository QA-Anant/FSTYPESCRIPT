// encapsulation in TypeScript
// public, private, protected
class employee {
    #employeeName;
    #employeeId;
    constructor(name, id) {
        this.#employeeName = name;
        this.#employeeId = id;
    }
    getemployeeId() {
        return this.#employeeId;
    }
    getemployeeName() {
        return this.#employeeName;
    }
    setemployeeName(name) {
        return this.#employeeName = name;
    }
    setemployeeId(id) {
        return this.#employeeId = id;
    }
}
const emp1 = new employee('John', 101);
//emp.#employeeName = 'Doe'; // error because it is private member of class employee
console.log(emp1.getemployeeName());
console.log(emp1.getemployeeId());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib29wc19FbmNhcHN1bGF0aW9uSW5UUy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2ZpbGVzVG9Db21waWxlL29vcHNfRW5jYXBzdWxhdGlvbkluVFMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUU3QixNQUFNLFFBQVE7SUFDVCxhQUFhLENBQVM7SUFDdEIsV0FBVyxDQUFTO0lBRXJCLFlBQVksSUFBWSxFQUFFLEVBQVU7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFTSxlQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRU0sZUFBZSxDQUFDLElBQVk7UUFDL0IsT0FBTyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRU0sYUFBYSxDQUFDLEVBQVU7UUFDM0IsT0FBTyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBSUo7QUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkMsb0ZBQW9GO0FBRXBGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyJ9