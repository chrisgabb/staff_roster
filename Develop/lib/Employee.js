// TODO: Write code to define and export the Employee class
const EMPLOYEE_ROLE = "Employee"

class Employee {

    constructor(name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = EMPLOYEE_ROLE;
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }
    getRole() {
        return this.role
    }

}
Employee.lastId = 0;


module.exports = Employee;