const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name:"fullName",
        message:"Enter your full name: ",
        type:"input",
    },
    {
        name:"description",
        message:"Write a description of project: ",
        type:"input",
    },
    {
        
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFileSync("generatedREADME.md", answers.fullName);
    console.log(answers.fullName);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });