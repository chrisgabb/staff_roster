// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

const ENGINEER_ROLE = "Engineer";

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email)
        this.role = ENGINEER_ROLE;
        this.github = github
    }

    getGithub() {
        return this.github
    }

};

module.exports = Engineer;