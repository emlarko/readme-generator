// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Project Title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please add a Description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide Installation information:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide Usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'License?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please provide guidelines on Contributing:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Tests?',
        name: 'tests'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = 'README.md';
    fs.writeFile(fileName, data), (err) =>
    err ? console.error(err) : console.log('Success')
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
