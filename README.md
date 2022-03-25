# Professional README Generator

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [References](#references)
* [Process](#process)
* [Results](#results)
* [Credit](#credit)

## Description
Create an application that a developer can use to quickly create a professional README for new projects. The generated README should contain a Project Title and Sections entitled Descripton, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

## Installation
To install this application, type “npm install" in the command line.

## Usage
To run this application and generate your readme, type "node index.js" in the command line.

## Technologies
Project was updated using:
* VS Code
* HTML
* CSS
* JavaScript
* Node.js
* Terminal (Mac)
* Git
* GitHub

## References
* [How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
* [Inquirer Node Package](https://www.npmjs.com/package/inquirer)
* [Markdown License Bradges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Process
### STEP 1. - SETUP
* Cloned the starter code and created my own repository on GitHub
* Downloaded inquirer
* Rearranged files
* Pushed first commit of files into the new Repo using Git

### STEP 2. - CREATE STRUCTURE
* Created an array of questions
* Created a README template in a markdown document
* Used README template to insert a template literal into the generateMarkdown() function.

### STEP 3. - CREATE FUNCTIONALITY
* Used inquirer to prompt questions, then return the answers and pass them into the generateMarkdown() function, then pass the file name and response data into the writeToFile() function
* Passed the response data into the generateMarkdown() function and insert data into template literal
* Used the File System module to take the file name and response data and write the README document and store in the dist folder.

### STEP 4. - FINALIZE
* Made various commits throughout process to save progress
* Recorded video to show how to run the application
* Finished README

## Results
* VIDEO LINK HERE!!
* https://github.com/etrenholm/readme-generator

## Credit
Erica Trenholm: https://github.com/etrenholm

### ©️ March 2022
