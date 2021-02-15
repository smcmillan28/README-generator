// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const gpl = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  if (license === "GNU GPLv3") {
    return gpl;
  } else if (license === "MIT") {
    return mit;
  } else if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    const badge = renderLicenseBadge(license);
    return `This project is licensed under the ${license} license. \n` + badge;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description of Project

${data.description}

## Table of Contents

- [Installation and Usage Instructions](#installation-and-usage-instructions)
- [Contribution Guidelines](#contribution-guidelines)
- [Licensing](#licensing)
- [Questions](#questions)

## Installation and Usage Instructions
To install the program, use the following command:

~~~bash
${data.install}
~~~

To run the program, use the following command:

~~~bash
${data.run}
~~~

## Contribution Guidelines
${data.contribution}

## Licensing
${renderLicenseSection(data.license)}

## Questions
Check out my GitHub profile [here.](https://github.com/${data.github})

Feel free to send me an email, as well: ${data.email}

Thank you for visiting my page!

`;
}

module.exports = generateMarkdown;