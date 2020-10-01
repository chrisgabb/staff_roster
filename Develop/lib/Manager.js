// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

const MANAGER_ROLE = "Manager"

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = MANAGER_ROLE;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

}

module.exports = Manager;