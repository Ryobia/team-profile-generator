const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

function Generate() {
  

};

Generate.prototype.getInfo = function() {
    return inquirer.prompt({
        type: 'list',
        name: 'role',
        message: "What is this Employee's role in the company?",
        choices: ['Manager', 'Engineer', 'Intern']

        },{
            type: 'text',
            name: 'name',
            message: "What is this Employee's name?"
        },{
            type: 'text',
            name: 'id',
            message: "What is this Employee's ID?"
        },{
            type: 'text',
            name: 'email', 
            message: "What is this Employee's email address?"
            
        });
  
}

new Generate().getInfo()
.then(data => {
    switch (data.role) {
        case 'Manager':
            console.log(data.role);
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


// },
// {
//     type: 'text',
//     name: 'id',
//     message: "What is this Employee's ID?"
// },
// {
//     type: 'text',
//     name: 'email', 
//     message: "What is this Employee's email address?"
// },
// {
//     type: 'list',
//     name: 'role',
//     message: "What is this Employee's role in the company?",
//     choices: ['Manager', 'Engineer', 'Intern']