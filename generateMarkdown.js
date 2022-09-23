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
  } else if (license === "") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0 License") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 2-Clause License") {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "The MIT License") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "The Unilicense") {
    return "(http://unlicense.org/)";
  } else if (license === "") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  *[Project Description](#description)
  *[Installation Instructions](#installation)
  *[Usage](#useage)
  *[${renderLicenseLink(data.License)}](#License)
  *[Contribution Guidelines](#contributing)
  *[Testing](#tests)
  *[Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.useage}
  ## Contribution Guidelines
  ${data.contributing}
  ## Test Instructions
  ${data.tests}
  ## License 
  ${data.license}
  ## Questions
  - Github: ${data.Github}
  - Email: ${data.Email}
  `;
}
module.exports = generateMarkdown;
