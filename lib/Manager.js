const inquirer = require('inquirer');
const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, office) {
        super(name, id, email, role)

       this.role = role;
       this.officeNumber = office;
    };

    getOffice() {
        return officeNumber;
    };
}





module.exports = Manager;