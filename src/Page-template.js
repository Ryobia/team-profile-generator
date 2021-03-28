
class Generate {
    constructor(Manager, Engineers, Interns) {
    

        this.Manager = Manager;
        this.Engineers = Engineers;
        this.Interns = Interns;

};

   

    generateManager() {
        return ` 
            <div class="card m-2 col-lg-3 p-0">
                <div class="card-body p-0">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title ">${this.Manager.name}</h3>
                        <h5 class="card-subtitle mb-2 ">${this.Manager.role}</h5>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${this.Manager.id}</li>
                        <li class="list-group-item">${this.Manager.email}</li>
                        <li class="list-group-item">${this.Manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `
    };

    generateEngineers() {
            return ` 
            <div class="card m-2 col-lg-3 p-0">
                <div class="card-body p-0">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title ">${this.Engineers[0].name}</h3>
                        <h5 class="card-subtitle mb-2 ">${this.Engineers[0].role}</h5>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${this.Engineers[0].id}</li>
                        <li class="list-group-item">${this.Engineers[0].email}</li>
                        <li class="list-group-item">${this.Engineers[0].github}</li>
                    </ul>
                </div>
            </div>
        `
    };
           
        
        
           


    generateInterns() {
        return ` 
            <div class="card m-2 col-lg-3 p-0">
                <div class="card-body p-0">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title ">${this.Interns[0].name}</h3>
                        <h5 class="card-subtitle mb-2 ">${this.Interns[0].role}</h5>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${this.Interns[0].id}</li>
                        <li class="list-group-item">${this.Interns[0].email}</li>
                        <li class="list-group-item">${this.Interns[0].school}</li>
                    </ul>
                </div>
            </div>
        `

    };

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
    `
    };


}
module.exports = Generate;