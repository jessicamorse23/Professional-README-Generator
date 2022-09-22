// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

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
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0'],
            name: 'license',
        },

        {type: 'input',
        message: 'Please enter your GitHub username',
        name: 'GitHubUsername',
            
        },

        {
            type: 'input',
            message: 'Please enter your email',
            name: 'email',
        },
    ])

    // .then(({name,bio}) =>
    //     fs.writeFile('index.html', createHtml(name, bio), (err) =>
    //         err ? console.log(err) : console.log("Sucess!")
    //     )
    // );

// TODO: Create a function to write README file
    .then((answers) => {
    JSON.stringify(answers)
    fs.writeFileSync('generateREADME.md', generateREADME(answers))
    console.log('README here');
})

.catch((err) => console.error(err));

// TODO: Create a function to initialize app
// function init() {}
const generateREADME = ({ title, description, installation, useage, contributing, tests, license, GitHubUsername, email  }) => {
    return `
    <div id="top"></div>
    # ${title}
    ## Table of Contents
    *[Project Description](#description)
    *[Installation Instructions](#installation)
    *[Usage](#useage)
    *[License](#license)
    *[Contribution Guidelines](#contributing)
    *[Testing](#tests)
    *[Questions](#questions)

    ## Description
    `
}

// Function call to initialize app
init();
