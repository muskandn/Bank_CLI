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
      name: "Amount",
      message: "Enter the amount of money you want to withdraw: ",
    },
    
  ];
  
  const QuestionD = [
    {
      type: "input",
      name: "Amount",
      message: "Enter the amount of money you want to deposite: ",
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

module.exports={QuestionD,QuestionT,QuestionW,Questions,loginQuestions}