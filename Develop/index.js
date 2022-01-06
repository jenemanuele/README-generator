// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path')
const { prompt } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
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
      message: 'What is your Table of Contents?'  
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are your installations?'  
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage?'  
    },
    {
      type: 'input',
      name: 'license',
      message: 'What is your license?'  
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who is contributing?'  
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the tests?'  
    },
   
    {
      type: 'input',
      name: 'questions',
      message: 'Are there any questions?'  
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(ans=>console.log(ans));
}

// Function call to initialize app
init();
