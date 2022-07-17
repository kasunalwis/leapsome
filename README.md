# leapsome

#Overview

This UI testing framework design to test Leapsome case study. Framework design using Node, TypeScript and Cypress.

Folder Structure

fixtures - Contains external static data that we want to use in the test files.
e2e - Contains all the page objects and test cases.
support - It contains all the reusable behavior of the custom commands.

#Getting Started

Make sure you have NodeJS installed.

- git clone git@github.com:kasunalwis/leapsome.git
- cd leapsome
- npm install
- To execute all the tests (Both UI and API) type below command in terminal
- npm test

Sample execution Report

![Screenshot 2022-07-17 at 09 30 40](https://user-images.githubusercontent.com/11239934/179388553-9c16497b-8c93-44cd-9ab5-9ca53a36beca.png)

In order to view allure report 

- Make sure [allure commline tool](https://docs.qameta.io/allure/#_installing_a_commandline) is installed
- Once the execution is completed note that `allure-results` folder is generated in root
- In terminal type `allure generate`
- To view the report type `allure open`

![Screenshot 2022-07-17 at 09 40 29](https://user-images.githubusercontent.com/11239934/179388882-780ca636-bfbe-449f-a9f2-0014820a3012.png)

![Screenshot 2022-07-17 at 09 40 54](https://user-images.githubusercontent.com/11239934/179388887-06e57498-a351-44fd-9e49-56430b65c9d8.png)

