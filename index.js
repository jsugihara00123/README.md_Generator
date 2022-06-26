// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkDown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = 
  [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What installations are required to run this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is this app going to be use? Please provide instructions.',
    },
    {
      type: 'list',
      name: 'license',
      choices: ["License 1", "License 2", "License 3", "License 4", "License 5"]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter any contributing elements.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide any tests if necessary.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter in your Github username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter in your email address.',
    }
  ]

// TODO: Create a function to write README file
function createReadMe(fileName, data){
  fs.writeFile(`./${fileName}`,data, (err) =>
  {
    if(err){
      console.log(err)
    }
    console.log("generating your README has been sucessful!")
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)

    .then(function(data){
      createReadMe("README.md", generateMarkdown(data));
      console.log(data)
    })
}

// Function call to initialize app
init();
