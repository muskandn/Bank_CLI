const { program } = require("commander");
const inquirer = require("inquirer");//// not working?????????
const axios= require("axios")
// const program = new Command();



const Questions = [
  {
    type: "input",
    name: "FirstName",
    message: "Enter your first name: ",
  },
  {
    type: "input",
    name: "LastName",
    message: "Enter your last name: ",
  },
  {
    type: "input",
    name: "Email",
    message: "Enter your email ID: ",
  },
  {
    type: "input",
    name: "Password",
    message: "Enter your password: ",
  },
  {
    type: "input",
    name: "C_Password",
    message: "Confirm password: ",
  },
  {
    type: "input",
    name: "Pin",
    message: "Enter your PIN: ",
  },
  {
    type: "input",
    name: "Bank_Balance",
    message: "Enter your Bank_Balance: ",
  },
  {
    type: "input",
    name: "AadhaarCard",
    message: "Enter your AadhaarCard No: ",
  },
  {
    type: "input",
    name: "PANCard",
    message: "Enter your PANCard No: ",
  },
  {
    type: "input",
    name: "PhoneNo",
    message: "Enter your Phone No: ",
  },
  {
    type: "input",
    name: "FatherName",
    message: "Enter your Father's Name: ",
  },
  {
    type: "input",
    name: "Address",
    message: "Enter your Address Name: ",
  }
];


const loginQuestions = [

  {
    type: "input",
    name: "Email",
    message: "Enter your email ID: ",
  },
  {
    type: "input",
    name: "Password",
    message: "Enter your password: ",
  },
  {
    type: "input",
    name: "Pin",
    message: "Enter your PIN: ",
  },
  {
    type: "input",
    name: "AccountNo",
    message: "Enter your AccountNo: ",
  }
];

const QuestionW = [
  {
    type: "input",
    name: "withdrawal",
    message: "Enter the amount of money you want to withdraw: ",
  },
  
];

const QuestionD = [
  {
    type: "input",
    name: "deposite",
    message: "Enter the amount of money you want to deposite: ",
  },
  
];

const QuestionT = [
  {
    type: "input",
    name: "withdrawal",
    message: "Enter the amount of money you want to withdraw: ",
  },
  
];

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
    inquirer.prompt(Questions).then((answers) => {
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
    inquirer.prompt(loginQuestions).then((answers) => {
      makeRequestL(answers);
    });
  });


/// user check balance-----------------------------------------------------------------------------------------------------------------
// async function makeRequestB() {
//   const config = {
//     method: "get",
//     url: "http://localhost:4000/balance",
//     // data: answers
//   };

//   let res = await axios(config);

//   console.log(res.data);
// }

// program
//   .command("balance")
//   .alias("b")
//   .description("member loggin successfully")
//   .action(() => {
//     axios.get("http://localhost:4000/balance")
//     // makeRequestB();
//   });



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
    inquirer.prompt(QuestionW).then((answer) => {
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
    inquirer.prompt(QuestionD).then((answer) => {
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
  .command("Deposite")
  .alias("d")
  .description("successfully deposited")
  .action(() => {
    inquirer.prompt(QuestionT).then((answer) => {
      makeRequestT(answer);
    });
  });
program.parse();