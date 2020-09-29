// TODO: Write code to define and export the Employee class
class Employee {
    constructor(id, role, name, email) {
        this.role = role
        this.name = name;
        this.email = email;
    }

    getID() {
        return this.id = id
    }

    getName() {
        return this.name = name
    }

    getEmail() {
        return this.email = email
    }
    getRole() {
        return this.role = role
    }

}
Employee.lastId = 0;


module.exports = Employee;