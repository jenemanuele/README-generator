const licenseArr = ["MIT License", "Academic Free License v3.0", "Apache license 2.0"]



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
    return ""
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]){
    return `Read more about ${licenceArr[0]} here:`
  } else if (license === licenseArr[1]) {
    return `Read more about ${licenceArr[1]} here:`
  } else if (license === licenseArr[2]) {
    return `Read more about ${licenceArr[2]} here:`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![alt text](images/test.1.PNG)
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Useage](#useage)
  * [License](#license)
  * [Contributors](#contributors)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  * [License](#license)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Useage
  ${data.useage}
  ## Contributors
  ${data.contributors}
  ## How to Contribute
  ${data.howContribute}
  [Contributor Covenant](https://www.contributor-covenant.org/)
  ## Tests
  ${data.tests}
  ## Questions?
  ${data.questions}
  ## License
  ${renderLicenseSection(data.licenseArr)}
  ${renderLicenseLink(data.license)}
  ### Reach me here:
  [${data.username}](https://github.com/${data.username}) 
  ${data.email}`
  ;
}

module.exports = generateMarkdown;
//module.exports - { writeFile };
