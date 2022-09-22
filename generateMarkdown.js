// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0 License") {
   return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 2-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "The MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "The Unilicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
const generateMarkdown = ({ title, description, installation, useage, contributing, tests, license, GitHubUsername, email  }) => {
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
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${useage}

  ## Contribution Guidelines
  ${contributing}

  ## Test Instructions
  ${tests}

  ## License 
  ${license}
  `;
}
module.exports = generateMarkdown;
