const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
        {
            type:"input",
            name:"license",
            message:"Provide licensing details. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
        },
        {
            type: "list",
            name: "badge",
            message: "What is the name of your project?",
            choices:["License-MIT-blue", "License-Apache2.0-red", "License-GBL3.0-yellow"]
        },
        {
            type:"input",
            name:"projectName",
            message:"What is your project name?",
        },
        {
            type:"input",
            name:"description",
            message:"Provide a brief description of your project.",
        },
        {
            type:"input",
            name:"motivation",
            message:"What was your motivation? Why did you build this project",
        },
        {
            type:"input",
            name:"problemSolved",
            message:"What problem does it solve?",
        },
        {
            type:"input",
            name:"learnedInfo",
            message:"What did you learn?",
        },
        {
            type:"input",
            name:"projectInstall",
            message:"What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        },
        {
            type:"input",
            name:"usage",
            message:"Provide instructions and examples for use.",
        },
        {
            type:"input",
            name:"credits",
            message:"List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence.",
        },
])
.then((response)=>{
    fs.writeFile("NEWREADME.md", 
    `# License: ${response.license}
    ![${response.license}](https://imgshields.io/badge/${response.badge})
    # ${response.projectName}

    
    ## Table of Content
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Credits](#credits)
    *[License](#license)

    ## Description
    
    ${response.description} ${response.motivation} ${response.problemSolved} ${response.learnedInfo}
    
    ## Installation
    
    ${response.projectInstall}
    
    ## Usage
    
    ${response.usage}

    ## Credits
    
    ${response.credits}`,
    
    (err) => {
        if (err) {
              console.log(err);
            } else {
        console.log("README.md successfully generated!");
        }
    });
})