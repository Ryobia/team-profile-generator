class Generate {
  constructor(Manager, Engineers, Interns) {
    this.Manager = Manager;
    this.Engineers = Engineers;
    this.Interns = Interns;
  }

  generateManager() {
    return ` 
            <div class="card m-2 col-lg-3 p-0 shadow">
                <div class="card-body p-0">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title ">${this.Manager.name}</h3>
                        <h5 class="card-subtitle mb-2 ">${this.Manager.role}</h5>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.Manager.id}</li>
                        <li class="list-group-item">Email: ${this.Manager.email}</li>
                        <li class="list-group-item">Office: ${this.Manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `;
  }

  generateEngineers() {
      let engineerHTML = '';
    for (let i = 0; i<this.Engineers.length; i++) {

    engineerHTML += ` 
            <div class="card m-2 col-lg-3 p-0 shadow">
                <div class="card-body p-0">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title ">${this.Engineers[i].name}</h3>
                        <h5 class="card-subtitle mb-2 ">${this.Engineers[i].role}</h5>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.Engineers[i].id}</li>
                        <li class="list-group-item">Email: ${this.Engineers[i].email}</li>
                        <li class="list-group-item">Github: <a>https://github.com/${this.Engineers[i].github}</a></li>
                    </ul>
                </div>
            </div>
        `;}
        return engineerHTML;
  }

  generateInterns() {
      let internHTML = '';
      for (let i = 0; i<this.Interns.length; i++) {
          
    internHTML += ` 
            <div class="card m-2 col-lg-3 p-0 shadow">
                <div class="card-body p-0">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title ">${this.Interns[i].name}</h3>
                        <h5 class="card-subtitle mb-2 ">${this.Interns[i].role}</h5>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.Interns[i].id}</li>
                        <li class="list-group-item">Email: ${this.Interns[i].email}</li>
                        <li class="list-group-item">School: ${this.Interns[i].school}</li>
                    </ul>
                </div>
            </div>
        `;}
        return internHTML;
  }

  generatePage() {
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team-Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" 
        crossorigin="anonymous">
    </head>
    <body>
        <header class="d-flex justify-content-center p-4 mb-5 bg-danger">
            <h3 class="font-weight-bold">My Team</h3>
        </header>

        <main class="container-fluid">
            <div class="d-flex flex-sm-wrap justify-content-center">

            ${this.generateManager()}

            ${this.generateEngineers()}

            ${this.generateInterns()}

            </div>
        </main>
        
    </body>
    </html>
    `;
  }
}
module.exports = Generate;
