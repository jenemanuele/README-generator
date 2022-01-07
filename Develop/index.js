// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path')
const { prompt } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project name?'  
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
      type: 'input',
      name: 'contents',
      message: 'Do you need a Table of Contents?'  
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps to install your?'  
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage?'  
    },
    {
      name: 'license',
      message: 'Select kind of license for this application:',
      type: 'checkbox',
      choices: ["MIT", "Academic Free License v3.0", "Apache license 2.0"]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who is contributing?'  
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the tests used for this project?'  
    },

    {
      type: 'input',
      name: 'questions',
      message: 'Are there any questions?'  
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data,
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated`))
}


// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(answers => {
      writeToFile(('README'), (generateMarkdown(answers)))
    });    
}

// Function call to initialize app
init();
