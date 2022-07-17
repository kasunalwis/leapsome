# Overview

This UI testing framework design to test Leapsome case study. Framework design using NodeJS, TypeScript and Cypress.

Folder Structure

- fixtures - Contains external static data that we want to use in the test files.
- e2e - Contains all the page objects and test cases.
- support - It contains all the reusable behavior of the custom commands.

# Getting Started

Make sure you have NodeJS installed.

- git clone [git@github.com:kasunalwis/leapsome.git](https://github.com/kasunalwis/leapsome.git)
- cd leapsome
- npm install
- To execute all the tests (Both UI and API)
  - Make sure [test data attribute PR](https://github.com/leapsome-interview/kasun-alwis/pull/1) is merged to main
  - Make sure both application and data base is up and running on `http://localhost:3000/`
  - `npm test`

Sample execution Report

![Screenshot 2022-07-17 at 10 30 44](https://user-images.githubusercontent.com/11239934/179390745-30201f20-3e31-4572-95ff-82a794499db9.png)


In order to view allure report 

- Make sure [allure commline tool](https://docs.qameta.io/allure/#_installing_a_commandline) is installed
- Once the execution is completed note that `allure-results` folder is generated in root
- In terminal type `allure generate`
- To view the report type `allure open`

![Screenshot 2022-07-17 at 10 31 50](https://user-images.githubusercontent.com/11239934/179390760-8d91c520-dc79-4feb-84ad-de8d5ebb89c4.png)

![Screenshot 2022-07-17 at 10 33 25](https://user-images.githubusercontent.com/11239934/179390766-e6d83b92-f9cf-4ae6-a207-c18750e6df5e.png)

