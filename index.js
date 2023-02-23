// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your GitHub url?',
        name: 'url'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
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
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
    fs.writeFile(fileName, data, err => {
    err ? console.error(err) : console.log('Success')
    });
};


// TODO: Create a function to initialize app
async function init() {
    const userResponses = await inquirer.prompt(questions);

    const markdown = generateMarkdown(userResponses);
    await writeToFile('exampleREADME.md', markdown);
};


  

// Function call to initialize app
init();