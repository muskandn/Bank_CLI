const { Command } = require("commander");
const inquirer = require("inquirer");//// not working?????????
const axios= require("axios")
const program = new Command();


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
    name: "AccountNo",
    message: "Enter your Account No: ",
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
    name: "city",
    message: "Enter your City Name: ",
  },
  {
    type: "input",
    name: "state",
    message: "Enter your state Name: ",
  },
];

// testing
program.version("2.0.0").description("Bank project");


const getData=async ()=>{
    const res= await axios.get("http://localhost:4000/register");

}

// add command
program
  .command("add")
  .alias("a")
  .description("member added")
  .action(() => {
    inquirer.prompt(Questions).then((answers) => getData(answers));/// may be ... not getting how to connect it
  });

//find command
// program
//   .command("find <name>")
//   .alias("f")
//   .description("find member")
//   .action((name) => {
//     findMember(name);
//   });

// update command
// program
//   .command("update <_id>")
//   .alias("u")
//   .description("update member details")
//   .action((_id) => {
//     inquirer.prompt(Questions).then((answers) => {
//       updateMember(_id, answers);
//     });
//   });

// remove command
// program
//   .command("remove <_id>")
//   .alias("d")
//   .description("member is removed.")
//   .action((_id) => {
//     removeMember(_id);
//   });

// list members

// program
//   .command("list")
//   .alias("l")
//   .description("list the members")
//   .action(() => {
//     listMember();
//   });
// program.parse(process.argv);