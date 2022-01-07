const licenseArr = ["MIT License",  "Academic Free License v3.0", "Apache License 2.0"]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArr [0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === licenseArr[1]) {
    return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)"
  } else if (license === licenseArr[2]) {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else {
    return ''
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == licenseArr[0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if (license === licenseArr[1]) {
    return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)"
} else if (license === licenseArr[2]) {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
}
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return `[${licenseArr[0]}](https://opensource.org/licenses/MIT)`
  } else if (license === licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/AFL-3.0)`
  } else if (license === licenseArr[2]){
    return `[${licenseArr[2]}(https://opensource.org/licenses/Apache-2.0]`
  }
    return ``
  }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]){
    return `Read more about ${licenceArr[0]} here:`
  } else if (license === licenseArr[1]) {
    return `Read more about ${licenceArr[1]} here:`
  } else if (license === licenseArr[2]) {
    return `Read more about ${licenceArr[1]} here:`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation(#installation)]
  * [Useage](#useage)
  * [License](#license)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Useage
  ${data.useage}
  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions?
  ### Reach me here:
  [${data.username}](https://github.com/${data.username}) 
   ${data.email}`;
}

module.exports = generateMarkdown;
