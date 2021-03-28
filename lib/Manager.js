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

    makeCard() {
        return ` 
        <div class="card m-2 col-lg-3 p-0">
            <div class="card-body p-0">
                <div class="card-header bg-primary text-white">
                    <h3 class="card-title ">${this.name}</h3>
                    <h5 class="card-subtitle mb-2 ">${this.role}</h5>
                </div>
                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${this.id}</li>
                    <li class="list-group-item">${this.email}</li>
                    <li class="list-group-item">${this.officeNumber}</li>
                </ul>
            </div>
        </div>
    `
    }






}





module.exports = Manager;