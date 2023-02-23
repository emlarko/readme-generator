# README.md Generator

## Description

The aim of this project was to create a command-line application that dynamically creates a README.md file from a user's input. 

## Installation 

To generate your README using the application, git clone the repo to your local machine.

Run npm install, which will install the inquirer package.

Start the application by running node index.js in the command line.

## Usage 

![DemoGif](demo/demo.gif?raw=true "demo gif")

After running node index.js in the command line, the application will prompt the user with a series of questions for the README file. 

The application then takes the user responses, and generates markdown conditionally with a table of contents based on the responses. If an optional question is not answered, for example Usage, a section will not be created for this. 

The user will also be asked to choose a license from a list. The application will then generate a link to the license badge as well as a link to the license. 

An example README file has been included in this repo to demonstrate the final product. 