//All requirements initialized
const util = require("util");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const src = require("./src/htmlTemp");

//Set up Async functions
const writeFileAsync = util.promisify(fs.writeFile);

let teamArray = [];
let teamString = "";

console.clear();
console.log("MG Generate My Team");

//Run application
async function main() {
  try {
    await prompt();

    for (let i = 0; i < teamArray.length; i++) {
      // console.log("members ", teamArray[i]);
      teamString = teamString + src.generateCard(teamArray[i]);
    }

    let finalHtml = src.generateHTML(teamString);

    console.clear();
    console.log("One moment while index.html is generated");

    writeFileAsync("./dist/index.html", finalHtml);

    console.clear();
    console.log("Your index.html is generated");
    console.log(
      "----------------------------------------------------------------"
    );
  } catch (err) {
    return console.log(err.message);
  }
}

//Set up user data with inquirer

async function prompt() {
  let responseComplete = "";

  do {
    try {
      console.log("------------------------------------------------");
      let response = await inquirer.prompt([
        {
          type: "input",
          name: "employeeName",
          message: "What is your employee's name?: ",
          validate: function validateName(name) {
            return name !== "";
          },
        },
        {
          type: "input",
          name: "employeeId",
          message: "What is the employee's ID?: ",
          confirm: function confirmEmployeeId(name) {
            return name !== "";
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter employee email address: ",

          //email validator initialized
          confirm: function confirmEmail(name) {
            return validator.validate(name);
          },
        },
        {
          type: "list",
          name: "role",
          message: "What is your employee's role?: ",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ]);

      let secondResponse = "";

      if (response.role === "Engineer") {
        secondResponse = await inquirer.prompt([
          {
            type: "input",
            name: "GithubUsername",
            message: "Enter GitHub username:",
            confirm: function confirmGitHubUsername(name) {
              return name !== "";
            },
          },
        ]);

        const engineer = new Engineer(
          response.employeeName,
          response.employeeId,
          response.email,
          secondResponse.GithubUsername
        );
        teamArray.push(engineer);
      } else if (response.role === "Intern") {
        secondResponse = await inquirer.prompt([
          {
            type: "input",
            name: "employeeSchool",
            message: "What school is the employee attending?:",
            confirm: function confirmemployeeSchool(name) {
              return name !== "";
            },
          },
        ]);

        const intern = new Intern(
          response.employeeName,
          response.employeeId,
          response.email,
          secondResponse.employeeSchool
        );
        teamArray.push(intern);
      } else if (response.role === "Manager") {
        secondResponse = await inquirer.prompt([
          {
            type: "input",
            name: "officeNumber",
            validate: function validateOfficeNumber(name) {
              return name !== "";
            },
          },
        ]);

        const manager = new Manager(
          response.employeeName,
          response.employeeId,
          response.email,
          secondResponse.officeNumber
        );

        teamArray.push(manager);
      }
    } catch (err) {
      return console.log(err);
    }
    responseComplete = await inquirer.prompt([
      {
        type: "list",
        name: "finish",
        message: "Would you like to continue?",
        choices: ["Yes", "No"],
      },
    ]);
  } while (responseComplete.finish === "Yes");
}

main();
