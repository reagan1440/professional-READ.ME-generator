// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'editor',
        message: 'Write a description for your project',
        name: 'description'
    },
    {
        type: 'editor',
        message: 'explain the installation of your project',
        name: 'installation'
    },
    {
        type: 'editor',
        message: 'How do you use your app?',
        name: 'usage'
    },
    {
        type: 'editor',
        message: 'explain the contribution instructions for other users',
        name: 'contribution'
    },
    {
        type: 'editor',
        message: 'explain the instructions for testing',
        name: 'test'
    },
    {
        type: 'input',
        message: 'enter your Github username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'enter your email',
        name: 'email'
    },
    {
        type: 'list',
        message: 'what licensing would you like to use',
        name: 'licensing',
        choices: [
            "none",
            "MIT",
            "Apache license 2.0",
            "LGPL 3.0",
            "GPL 3.0",
        ]
    },
    {
        type: 'list',
        message: 'would you like to add a license document?',
        name: 'Licensed document',
        choices: ['yes', 'no']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
