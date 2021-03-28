const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Generate = require('./src/Page-template');

function Profile() {

    this.manager;
    this.engineers = [];
    this.interns = [];

};

Profile.prototype.newEmployee = function() {

        console.log(`
================================
         Add the Manager
================================
        `);
    
        return inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is this Manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter Manager name.');
                      return false;
                    }
                  }
            },{
                type: 'text',
                name: 'id',
                message: "What is this Manager's ID?",
                validate: idInput => {
                    if (idInput) {
                      return true;
                    } else {
                      console.log('Please enter Manager ID.');
                      return false;
                    }
                  }
            },{
                type: 'text',
                name: 'email', 
                message: "What is this Manager's email address?",
                validate: emailInput => {
                    if (emailInput) {
                      return true;
                    } else {
                      console.log('Please enter Manager email address.');
                      return false;
                    }
                  }
            },{
                type: 'text',
                name: 'office',
                message: "What is the Manager's office number?",
                validate: officeInput => {
                  if (officeInput) {
                    return true;
                  } else {
                    console.log('Please enter Office number.');
                    return false;
                  }
                }
        
                
            }])
            .then((data) => {
              this.manager = new Manager(data.name, data.id, data.email, 'Manager', data.office);
              this.enterEngineers();
            }); 
    
}
 Profile.prototype.enterEngineers = function() {
   
  console.log(`
  ================================
           Add an Engineer
  ================================
  `);

  return inquirer.prompt([
      {
          type: 'text',
          name: 'name',
          message: "What is this Engineer's name?",
          validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter Engineer name.');
                return false;
              }
            }
      },{
          type: 'text',
          name: 'id',
          message: "What is this Engineer's ID?",
          validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Please enter Engineer ID.');
                return false;
              }
            }
      },{
          type: 'text',
          name: 'email', 
          message: "What is this Engineer's email address?",
          validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter Engineer email address.');
                return false;
              }
            }
      },{
          type: 'text',
          name: 'github',
          message: "What is this Engineer's Github username?",
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter Github username.');
              return false;
            }
          }
      },{
          type: 'confirm',
          name: 'newEngineer',
          message: 'Do you have another Engineer to add?',
          default: false

      }])
      .then(data => {
        this.engineers.push(new Engineer(data.name, data.id, data.email, 'Engineer', data.github));
        if (data.newEngineer) {
          return this.enterEngineers();
        } else {
          this.enterInterns();
        }
      });

};

Profile.prototype.enterInterns = function() {

  console.log(`
  ================================
           Add an Intern
  ================================
  `);

  return inquirer.prompt([
      {
          type: 'text',
          name: 'name',
          message: "What is this Intern's name?",
          validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter Intern name.');
                return false;
              }
            }
      },{
          type: 'text',
          name: 'id',
          message: "What is this Intern's ID?",
          validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Please enter Intern ID.');
                return false;
              }
            }
      },{
          type: 'text',
          name: 'email', 
          message: "What is this Intern's email address?",
          validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter Intern email address.');
                return false;
              }
            }
      },{
          type: 'text',
          name: 'school',
          message: "What School is this Intern enrolled in?",
          validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log("Please enter Intern's School.");
              return false;
            }
          }
      },{
          type: 'confirm',
          name: 'newIntern',
          message: 'Do you have another Intern to add?',
          default: false

      }])
      .then(data => {
        this.interns.push(new Intern(data.name, data.id, data.email, 'Intern', data.school));
        if (data.newIntern) {
          return this.enterInterns();
        } else {
          pageHTML = new Generate(this.manager, this.engineers, this.interns).generatePage();
          writeFile(pageHTML);


          
        }
      });
};

const writeFile = (fileContent) => new Promise((resolve, reject) => {
  fs.writeFile('./dist/index.html', fileContent, err => {
    // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
    if (err) {
      reject(err);
      // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
      return;
    }

    // if everything went well, resolve the Promise and send the successful data to the `.then()` method
    resolve({
      ok: true,
      message: 'File created!'
    });
  });
});


module.exports = Profile;
