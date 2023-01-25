const inquirer = require("inquirer");
const fs = require("fs");
inquirer
    .prompt([
        {
            type:"input",
            name:"projectName",
            message:"What is your project name?",
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
        {
            type:"input",
            name:"license",
            message:"Provide licensing details. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
        },
])
.then((response)=>{
    fs.writeFile("README.md", `# ${projectName}

    ## Description
    
    ${motivation} ${problemSolved} ${learnedInfo}
    
    ## Installation
    
    ${projectInstall}
    
    ## Usage
    
    ${usage}

    ## Credits
    
    ${credits}
    
    ## License
    
    ${license}
    
 `)
})