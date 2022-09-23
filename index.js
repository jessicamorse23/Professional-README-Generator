// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
// const questions = [];   ``

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Give instructions for installing your project:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide usage information:',
            name: 'useage',
        },
        {
            type: 'input',
            message: 'Provide contribution guidelines:',
            name: 'contributing',
        },

        {
            type: 'input',
            message: 'Provide test instructions:',
            name: 'tests',
        },

        {
            type: 'list',
            message: 'Choose a license for your project',
            choices: ['Apache 2.0 License', 'BSD 2-Clause License', 'The MIT License', "The Unilicense"],
            name: 'license',
        },

        {type: 'input',
        message: 'Please enter your GitHub username',
        name: 'Github',
            
        },

        {
            type: 'input',
            message: 'Please enter your email',
            name: 'email',
        },
    ])
    
    .then((answers) => 
        {console.log(answers)
        fs.writeFile('README.md', generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log("works")
        )
});


// TODO: Create a function to initialize app
// function init() {}


// Function call to initialize app
// init();
