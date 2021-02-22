const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { clear } = require("console");

const employeeArray = [];

const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is your manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their e-mail address?',
        validate: function (email) {
            if(email.includes("@" && ".")) {
                return true;
            }else {
                return "PLEASE TYPE IN A VALID E-MAIL ADDRESS."
            }
        }
    },
    {
        type: 'input',
        name: "officeNumber",
        message: 'What is their office number?'
    },
]


const newRole = [
    {
        type: "list",
        name: "role",
        message: "What is the role of the next employee?",
        choices: ["Engineer", "Intern"],
    },
]

const engineerQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is this engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their e-mail address?',
        validate: function (email) {
            if(email.includes("@" && ".")) {
                return true;
            }else {
                console.log(" PLEASE TYPE IN A VALID E-MAIL ADDRESS.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "github",
        message: 'What is their GitHub username?'
    }
    
]

const internQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is this intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their e-mail address?',
        validate: function (email) {
            if(email.includes("@" && ".")) {
                return true;
            }else {
                console.log(" PLEASE TYPE IN A VALID E-MAIL ADDRESS.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "school",
        message: 'What school is this intern attending?'
    }
    
]

const addEmployee = () => {
    inquirer.prompt([
        {
        type: 'confirm',
        name: "continue",
        message: 'Would you like to add another employee?'
        }
    ]).then(function (data) {

        if (data.continue == true) {
            questions(engineerQs, internQs);
        } else {
            const html = render(employeeArray);

            fs.writeFile(outputPath, html, (err) =>
            err ? console.log(err) : console.log('Success! Building your team...'))
        }
    })
}

const questions = (qE, qI) => {
    inquirer.prompt(newRole)
        .then((response) =>{
            if (response.role === "Engineer") {
                inquirer.prompt(qE)
                    .then((answers) => {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                        employeeArray.push(engineer)
                        addEmployee();  
                    })
            } else if (response.role === "Intern") {
                inquirer.prompt(qI)
                .then((answers) => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                    employeeArray.push(intern)
                    addEmployee();  
                })
            }
        })

}

const init = (qM) => {
    console.log("Let's get started with building your team! We'll start with your manager.")
    inquirer.prompt(qM)
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            employeeArray.push(manager)
            addEmployee()
        })
    }

init(managerQs);


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
