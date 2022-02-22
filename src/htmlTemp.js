// Generates page structure using Bootstrap and Fontawesome
const generateHTML = function (teamString) {
  return `<!DOCTYPE html>
            <html lang="en">

            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Portfolio</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>
            </style>

            </head>

            </head>
            <header class="header">
                <div class="jumbotron section bg-success">
                    <h1 class="display-5 text-blue text-center">My Team</h1>
                </div>
            </header>


            <body>
            <main class="container-body container-fluid">
            <div class="row">
                    ${teamString} 
                </div>
            </div>

            <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
            </body>

            </html>`;
};

const generateCard = function (arr) {
  // Fontawesome Icons change based on role
  let positionIcon = "";
  // Criteria for display
  let roleInfo = "";

  if (arr.title === "Manager") {
    positionIcon = `<i class="fa-duotone fa-briefcase"></i>`;
    roleInfo = `Office Number: ${arr.officeNumber}`;
  } else if (arr.title === "Engineer") {
    positionIcon = `<i class="fa-duotone fa-helmet-safety"></i>`;
    roleInfo = `GitHub Username: <a href="https://github.com/${arr.GithubUsername}" target="_blank">${arr.GithubUsername}</a>`;
  } else if (arr.title === "Intern") {
    positionIcon = `<i class="fa-solid fa-screen-users"></i>`;
    roleInfo = `School: ${arr.employeeSchool}`;
  }

  return `
        
    <div class="col-md-4 col-sm-6 col-12 col-lg-3">    
        <div class="card shadow-lg mb-5 bg-white rounded">
            <div class="card-header bg-primary">
                <h4 class="text-white text-center">${arr.name}</h4>  
                <h4 class="text-white text-center">${positionIcon}</i> ${arr.title}</h4>
            </div>

            <div class="card-body">
                <ul>
                    <li>Employee ID: ${arr.id}</li>
                    <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
                    <li>${roleInfo}</li>
                </ul>
            </div>
        </div>
    </div>
`;
};

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;
