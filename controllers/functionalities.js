const inquirer = require("inquirer");

module.exports = function () {
  const array = [
    "Select option to proceed: ",
    "1. Withdraw",
    "2. Deposit",
    "3. Check balance",
    "4. Transfer money",
    "5. Change pin",
    "6. Transactions history",
    "7. Fd",
    "8. Delete account",
    "9. Exit",
  ];

  array.forEach((val) => {
    console.log(val);
  });

  // Question

  const makeRequestR=require("../axios/register")
  const makeRequestL=require("../axios/login")
  const balanceRequest=require("../axios/balance")
  const makeRequestT=require("../axios/transfer")
  const makeRequestD=require("../axios/deposite")
  const makeRequestW=require("../axios/withdrawal")
  const makeRequestH=require("../axios/history")
  const makeRequestDl=require("../axios/delete")
  const makeRequestP=require("../axios/changePin")
  const makeRequestF=require("../axios/fd")
  // exit function

  function exit() {
    console.log("Thank you!");
  }
  const question = [
    {
      type: String,
      name: "option",
      message: "Enter choice: ",
    },
  ];

function checkChoice(answers) {
    switch (answers.option) {
      case "1":
        makeRequestW();
        break;

      case "2":
        makeRequestD();
        break;

      case "3":
        balanceRequest();
        break;

      case "4":
        makeRequestT();
        break;

      case "5":
        makeRequestP();
        break;

      case "6":
        makeRequestH();
        break;

      case "7":
        makeRequestF();
        break;

      case "8":
        makeRequestDl();
        break;

      case "9":
        exit();
        break;
    }
  }
inquirer.prompt(question).then((ans) => {
    checkChoice(ans);
  });
};