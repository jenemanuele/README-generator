// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path')
const { prompt } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// const { writeFile } = require;


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
      message: 'What is the title of this project?'  
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does this project do?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?'  
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this project? '  
    },
    {
      name: 'license',
      message: 'Select a license for this application:',
      type: 'list',
      choices: ['MIT License', 'Academic Free License v3.0', 'Apache license 2.0']
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who are the contributors?'  
    },
    {
      type: 'input',
      name: 'howContribute', 
      message: 'How do you contribute to this project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please add your testing instructions (if any).'  
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
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated!`))
}


// TODO: Create a function to initialize app
function init() {
  prompt(questions).then(answers => {
    writeToFile(('README'), (generateMarkdown(answers)))
  });    
}

// Function call to initialize app
init();
