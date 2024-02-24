// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
          'MIT License',
          'Apache License 2.0',
          'GNU GPLv3',
          'GNU AGPLv3',
          'No License',
        ],
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines if they differ from the Contributor Covenant.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users test your application? Perhaps give examples for users to run.',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email address:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`README.md file has been created!`);
    });
  }

// TODO: Create a function to initialize app
function init() {
    // Prompt the user for input using inquirer
    inquirer.prompt(questions)
      .then((answers) => {
        // Generate the README content based on the user's answers
        const readmeContent = generateMarkdown(answers);
  
        // Write the README content to a file
        writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
        console.error(error);
      });
  }

// Function call to initialize app
init();
