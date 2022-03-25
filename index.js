// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');

// Array of questions for user input
const questions = [

    // Project Name
    {
    type: 'input',
    name: 'title',
    message: 'What is your project name? (Required)',
    validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a project name.');
          return false;
        }
      }
    },

    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a project description.');
            return false;
          }
        }
      },

      // Installation Instructions
      {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for the installation of this project (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter instructions for the installation.');
            return false;
          }
        }
      },

      // Usage Information
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter usage information.');
            return false;
          }
        }
      },

      // Contribution Guidelines
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing to this project (Required)',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please enter contribution guidelines.');
            return false;
          }
        }
      },

      // Test Instructions
      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for this project (Required)',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please enter test instructions.');
            return false;
          }
        }
      },

      // License Information
      {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license for your application (Choose one)',
        choices: [
          'Apache', 
          'Boost Software', 
          'BSD 3-Clause',
          'Creative Commons',
          'Eclipse',
          'GNU',
          'MIT',
          'Mozilla',
          'None'
        ],
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('Please select a license.');
            return false;
          }
        }
      },

      // Questions Section
      // Github Username
      {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username? (Required)',
        validate: githubUsernameInput => {
          if (githubUsernameInput) {
            return true;
          } else {
            console.log('Please enter your GitHub Username.');
            return false;
          }
        }
      },

      // Email Address
      {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address? (Required)',
        validate: emailAddressInput => {
          if (emailAddressInput) {
            return true;
          } else {
            console.log('Please enter your email address.');
            return false;
          }
        }
      }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      reject (err);
      return;
    } else {
      console.log("Your README has been generated!")
    }
});
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(response => {
      return generateMarkdown(response)
    })
    .then(data => {
      return writeToFile('./dist/readme.md', data)
    })
}

// Function call to initialize app
init();