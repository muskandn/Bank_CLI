const { program } = require("commander");
const inquirer = require("inquirer");//// not working?????????
const axios= require("axios")
// const program = new Command();

const qn=require("./commandLine/questions")

program
  .name("rncli")
  .description("Create new React Native project with essential modules")
  .version("0.0.1");




/// user register process------------------------------------------------------------------------------------------------------
async function makeRequestR(answers) {
  const config = {
    method: "post",
    url: "http://localhost:4000/register",
    data: answers
  };

  let res = await axios(config);

  console.log(res.data);
}

program
  .command("register")
  .alias("r")
  .description("member added")
  .action(() => {
    inquirer.prompt(qn.Questions).then((answers) => {
      makeRequestR(answers);
    });
  });



/// user login process------------------------------------------------------------------------------------------------------------
async function makeRequestL(answers) {
  const config = {
    method: "post",
    url: "http://localhost:4000/signin",
    data: answers
  };

  let res = await axios(config);

  console.log(res.data);
}

program
  .command("login")
  .alias("l")
  .description("member loggin successfully")
  .action(() => {
    inquirer.prompt(qn.loginQuestions).then((answers) => {
      makeRequestL(answers);
    });
  });



/// user withdrawal process------------------------------------------------------------------------------------------------------------
async function makeRequestW(answer) {
  const config = {
    method: "get",
    url: "http://localhost:4000/withdrawal",
    data: answer
  };

  let res = await axios(config);

  console.log(res.data);
}

program
  .command("Withdraw")
  .alias("w")
  .description("withdrawal successful")
  .action(() => {
    inquirer.prompt(qn.QuestionW).then((answer) => {
      makeRequestW(answer);
    });
  });


  
/// user dposite process------------------------------------------------------------------------------------------------------------
async function makeRequestD(answer) {
  const config = {
    method: "get",
    url: "http://localhost:4000/deposite",
    data: answer
  };

  let res = await axios(config);

  console.log(res.data);
}

program
  .command("Deposite")
  .alias("d")
  .description("successfully deposited")
  .action(() => {
    inquirer.prompt(qn.QuestionD).then((answer) => {
      makeRequestD(answer);
    });
  });



/// user transfer process------------------------------------------------------------------------------------------------------------
async function makeRequestT(answer) {
  const config = {
    method: "get",
    url: "http://localhost:4000/transfer",
    data: answer
  };

  let res = await axios(config);

  console.log(res.data);
}

program
  .command("Transfer")
  .alias("t")
  .description("successfully transfered")
  .action(() => {
    inquirer.prompt(qn.QuestionT).then((answer) => {
      makeRequestT(answer);
    });
  });

/// user balance process------------------------------------------------------------------------------------------------------------
  
async function balanceRequest() {
  const config = {
    method: "get",
    url: "http://localhost:4000/balance",
    // data: answers,
  };

  let res = await axios(config);

  console.log(res.data);
}

program
  .command("balance")
  .alias("b")
  .description("balance is printed.")
  .action((_id) => {
      balanceRequest();
    // });
  });



/// user transaction history process------------------------------------------------------------------------------------------------------------
async function makeRequestH() {
  const config = {
    method: "get",
    url: "http://localhost:4000/history",
    // data: answer
  };

  let res = await axios(config);

  console.log(res.data);
}

program
  .command("history")
  .alias("h")
  .description("History is successfully showing.")
  .action((_id) => {
    // inquirer.prompt(QuestionH).then((answer) => {
      makeRequestH();
    // });
  });
program.parse();