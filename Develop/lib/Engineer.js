// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(id, name, github, email) {
        super(id, name, email)
        this.role = "Engineer";
        this. github = github
    }
    getGithub() {
        return this.github
    } 
    getRole() {
        return this.role = role
    }
};

module.exports = Engineer;