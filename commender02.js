const { program } = require("commander");
const inquirer = require("inquirer");//// not working?????????
const axios= require("axios")
const fs=require("file-system")
// const program = new Command();
const cfonts = require('cfonts');
const qn=require("./commandLine/questions")
const token=require("./utility/retrieveUserToken")
program
  .name("Bank of Union")
  .description("The Changing Face of Prosperity.")
  .version("0.0.1");


const makeRequestR=require("./axios/register")
const makeRequestL=require("./axios/login")
const balanceRequest=require("./axios/balance")
const makeRequestT=require("./axios/transfer")
const makeRequestD=require("./axios/deposite")
const makeRequestW=require("./axios/withdrawal")
const makeRequestH=require("./axios/history")
const makeRequestDl=require("./axios/delete")
const makeRequestP=require("./axios/changePin")

//making it continuous

const employeeQuestions=[
    {
        type: 'rawlist',
        name: 'option',
        message: 'What do you want ?',
        choices: [
            'Signup',
            'Signin',
            // new inquirer.Separator(),
            'Exit', 
            // <=== THIS IS THE ANSWER THAT SHOULD TERMINATE THE PROMPT
        ],
        default: 3,
    },
          
]
const performAction = async (action) => {
    switch (action) {
        case "Signin":
            console.log("Not yet implmented...");
            break;
        // HERE IS WHERE THINGS BREAK DOWN
        case "Signup":
            // let employeeData = 
            // await prompt(makeRequestR); // Grab the employee data by awaiting prompt
            // console.log(employeeData); // Console out the data
            console.log("Fdsg")
            // program
            // .command("register")
            // .alias("r")
            // .description("Registration/ Signup")
            // .action(() => {
            //   inquirer.prompt(qn.Questions).then((answers) => {
            //     makeRequestR(answers);
            //   });
            // });
            // inquirer.prompt(qn.Questions).then((answers) => {
            //     makeRequestR(answers);
            //   });
            break;
        default:
            break;
    }
}
const init = async () => {
    let action;
    action = inquirer.prompt(employeeQuestions).rawlist; // Get their choice by awaiting a prompt
    console.log(action);
    performAction(action)
    // While the user has not chosen to exit...
    // while(action!='Exit') {
    //     action = inquirer.prompt(employeeQuestions).action; // Get their choice by awaiting a prompt
    //     performAction(action); // Perform that chosen action
    // }
}

program
    .command("start")
    .alias("s")
    .description("Check Balance")
    .action(() => {
        init();
      // });
    });
// init();
// const employeeQuestions = [
//     // Role of employee
//     {
//         type: 'rawlist',
//         name: 'role',
//         message: 'What is the role of the employee?',
//         choices: [
//             'Engineer',
//             'Intern',
//             // new inquirer.Separator(),
//             'Finish building the team', 
//             // <=== THIS IS THE ANSWER THAT SHOULD TERMINATE THE PROMPT
//         ],
//         default: 3,
//     },
  
//     // Employee questions
//     {
//         type: 'input',
//         name: `employee_name`,
//         message: answer => `Enter name of the ${answer.role}`,
//     },
//     {
//         type: 'number',
//         name: `employee_id`,
//         message: answer => `Enter ${answer.role} ID`,
//         validate(answer) {
//             const valid = !isNaN(parseFloat(answer));
//             return valid || 'Please enter a number';
//         },
//         filter: Number,
//     },
//     {
//         type: 'input',
//         name: `employee_email`,
//         message: answer => `Enter ${answer.role} Email address`,
//     },
  
//     // Engineer questions
//     {
//         when(answer) {
//             return answer.role === 'Engineer';
//         },
  
//         type: 'input',
//         name: `engineer_github`,
//         message: 'Enter GitHub username',
//     },
  
//     // Intern questions
//     {
//         when(answer) {
//             return answer.role === 'Intern';
//         },
  
//         type: 'input',
//         name: `intern_school`,
//         message: 'Enter intern school',
//     },
  
//     // add more employees
//     {
//         type: 'confirm',
//         name: `add_more`,
//         message: 'Do you want to add another employee?', 
//         // <=== THIS IS THE QUESTION THAT SHOULD TERMINATE THE PROMPT
//         default: true,
//     },
//   ];
  
  
  // # Functions
  // * Inquires all over if add_more = true

//   function inquireAgain() {
//     inquirer.prompt(employeeQuestions).then(answers => {
//         // employeesInfo.push(answers);
//         if (answers.add_more) {
//             inquireAgain();
//         } else {
//             console.log(JSON.stringify("mm"));
//         }
//     });
//   }
  
  // * Initialize the inquirer prompts
  // async function init() {
  //   const inquireManager = await inquirer.prompt(managerQuestions);
  //   employeesInfo.push(inquireManager);
  
  //   inquireAgain();
  // }
  
  // # Initialisation
//   program
//     .command("start")
//     .alias("s")
//     .description("Check Balance")
//     .action(() => {
//       inquireAgain();
//       // });
//     });
  
  
cfonts.say('Hello|world!', {
	font: 'block',              // define the font face
	align: 'left',              // define text alignment
	colors: ['system'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment cfonts is being executed in
});

program.parse();
  
  
  
  
  
  