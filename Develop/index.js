// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please write a brief description of your project: ",
        name: "description",
    },
    {
        type: "input",
        message: "What command is used to install your project?",
        name: "install",
    },
    {
        type: "input",
        message: "What command is used to test/run your project?",
        name: "run",
    },
    {
        type: "input",
        message: "Please define any contribution guidelines: ",
        name: "contribution",
    },
    {
        type: "list",
        message: "Please select a license",
        name: "license",
        choices: ["MIT", "GNU GPLv3", "None"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            const contents = generateMarkdown(data);
            writeToFile("README.md", contents);
        })
}

// Function call to initialize app
init();