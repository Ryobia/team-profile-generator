const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

function Generate() {
  

};

Generate.prototype.getInfo = function() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is this Employee's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter Employee name.');
                  return false;
                }
              }
        },{
            type: 'text',
            name: 'id',
            message: "What is this Employee's ID?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter Employee ID.');
                  return false;
                }
              }
        },{
            type: 'text',
            name: 'email', 
            message: "What is this Employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter Employee email address.');
                  return false;
                }
              }
        },{
                type: 'list',
                name: 'role',
                message: "What is this Employee's role in the company?",
                choices: ['Manager', 'Engineer', 'Intern']
    
            
        }]);
  
}

new Generate().getInfo()
.then(data => {
    switch (data.role) {
        case 'Manager':
            const manager = new Manager(data.name, data.id, data.email, data.role);
            break;

        case 'Engineer':  
            const engineer = new Engineer(data.name, data.id, data.email, data.role);
            break;

        case 'Intern':
            const intern = new Intern(data.name, data.id, data.email, data.role);
            break;    
    }   
});

// inquirer.prompt({
//     type: 'text',
//     name: 'office',
//     message: "What is this Manager's office number?",
//     validate: officeInput => {
//         if (officeInput)  {
//             return true;
//         } else {
//             console.log("Please enter Manager's office number.");
//             return false;
//         }
//     }
// });