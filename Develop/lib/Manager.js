// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email, officeNumber)
        this.role = "Manager";
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    };
}

module.exports = Manager;