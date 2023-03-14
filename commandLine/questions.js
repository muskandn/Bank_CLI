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
      type: "password",
      name: "Password",
      message: "Enter your password: ",
    },
    {
      type: "password",
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
      type:"input",
      name:"DOB",
      message:"Enter your Date of Birth (DD/MM/YY): ",
    },
    {
      type:"input",
      name:"Age",
      message:"Enter your Age: ",
    },
    // {
    //   type:"input",
    //   name:"Age",
    //   message:" Enter your Age: ",
    // },
    {
      type:"input",
      name:"Gender",
      message:"Enter your Gender (M/F): ",
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
    },
    {
      type: "input",
      name: "Type",
      message: "Enter Account Type: ",
    },
  ];
  
  
  const loginQuestions = [
  
    {
      type: "input",
      name: "Email",
      message: "Enter your email ID: ",
    },
    {
      type: "password",
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
      name: "Amount",
      message: "Enter the amount of money you want to withdraw: ",
    },
    {
      type: "input",
      name: "Pin",
      message: "Enter your Pin: ",
    },
    
  ];
  
  const QuestionD = [
    {
      type: "input",
      name: "Amount",
      message: "Enter the amount of money you want to deposite: ",
    },
    {
      type: "input",
      name: "Pin",
      message: "Enter your Pin: ",
    },
    
  ];
  
  const QuestionT = [
    {
      type: "input",
      name: "Amount",
      message: "Enter the amount of money you want to transfer: ",
    },
    {
      type: "input",
      name: "receiverAccount",
      message: "Enter receiver's Account No: ",
    },
    
  ];
  const QuestionDl = [
  
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
      name: "AccountNo",
      message: "Enter your AccountNo: ",
    }
  ];

  const QuestionPin = [
    {
      type: "input",
      name: "AccountNo",
      message: "Enter your AccountNo: ",
    },
    {
      type: "input",
      name: "Pin",
      message: "Enter your current Pin: ",
    },
    {
      type: "input",
      name: "newPin",
      message: "Enter your new Pin: ",
    },
  ];

  const fdQues = [
    {
      type: "input",
      name: "option",
      message: "Enter option: ",
    },
    {
      type: "input",
      name: "amount",
      message: "Enter the amount: ",
    },
    {
      type: "input",
      name: "nomine",
      message: "Nomine name: ",
    },
  ];
  const withdFd = [
    {
      type: "input",
      name: "account",
      message: "Enter account Number: ",
    },
    {
      type: "input",
      name: "token",
      message: "Enter token: ",
    },
  ];
module.exports={QuestionD,QuestionT,QuestionW,Questions,withdFd,fdQues,loginQuestions,QuestionDl,QuestionPin}