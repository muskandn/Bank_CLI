#!/usr/bin/env node

const { program } = require("commander");
const inquirer = require("inquirer");//// not working?????????
const axios= require("axios")
const fs=require("file-system")
// const program = new Command();

const qn=require("./commandLine/questions")
const token=require("./utility/retrieveUserToken")
const cfonts = require('cfonts');

cfonts.say('Welcome!', {
	font: 'chrome',              // define the font face
	align: 'center',              // define text alignment
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

cfonts.say('Bank of Origin', {
	font: 'block',              // define the font face
	align: 'center',              // define text alignment
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

cfonts.say('The Changing Face of Prosperity', {
	font: 'chrome',              // define the font face
	align: 'center',              // define text alignment
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

program
  // .description("Bank of Union: The Changing Face of Prosperity.")
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

// choice 1
const array = [
  "1. New account",
  "2. Existing account"
]


const homeQues = [
  {
    type: "input",
    name: "value",
    message: "Enter choice (1 or 2) ",
  },
];

function checkChoice(answer){
  if(answer.value === "1"){
    makeRequestR();
  }else{
    makeRequestL();
  }
}

//starting-------------------------------------------------

program
  .command("start")
  .alias("s")
  .description("Starting page")
  .action(() => {
    array.forEach((value)=>{
      console.log(value);
    });
    inquirer.prompt(homeQues).then((answers) => {
      checkChoice(answers);
    });
  });



//if user wants to run the commands directly (instead of choosing options)---------------------------------------------------------------------------------------------

//user registration process--------------------------------------------------------------------------------------------------------------
program
  .command("register")
  .alias("r")
  .description("Registration/ Signup")
  .action(() => {
      makeRequestR();
    }
  );



/// user login process------------------------------------------------------------------------------------------------------------
program
  .command("login")
  .alias("l")
  .description("Singin")
  .action(() => {
      makeRequestL();
  }
  );



/// user withdrawal process------------------------------------------------------------------------------------------------------------

program
  .command("Withdraw")
  .alias("w")
  .description("Money Withdrawal")
  .action(() => {
      makeRequestW();
    });
  


  
/// user deposite process------------------------------------------------------------------------------------------------------------

program
  .command("Deposite")
  .alias("d")
  .description("Money Deposit")
  .action(() => {
      makeRequestD();
    });




/// user transfer process------------------------------------------------------------------------------------------------------------
// async function makeRequestT(answer) {
//   const config = {
//     method: "get",
//     url: "http://localhost:4000/transfer",
//     data: answer
//   };

//   let res = await axios(config);

//   console.log(res.data);
// }

program
  .command("Transfer")
  .alias("t")
  .description("Money Transfer")
  .action(() => {

      makeRequestT();
    });




/// user balance process------------------------------------------------------------------------------------------------------------

program
  .command("balance")
  .alias("b")
  .description("Check Balance")
  .action((_id) => {
      balanceRequest();
    // });
  });




/// user pin changing process------------------------------------------------------------------------------------------------------------

program
  .command("changePin")
  .alias("p")
  .description("Changie Pin")
  .action((_id) => {
      makeRequestP();
    });



/// user transaction history process------------------------------------------------------------------------------------------------------------

program
  .command("history")
  .alias("h")
  .description("Check History")
  .action((_id) => {
    // inquirer.prompt(QuestionH).then((answer) => {
      makeRequestH();
    // });
  });



//user delete process------------------------------------------------------------------------------------------

program
  .command("Delete")
  .alias("dl")
  .description("Delete Account")
  .action(() => {

      makeRequestDl(answer);
    });






program.parse(process.argv);