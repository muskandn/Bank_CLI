const inquirer = require("inquirer");
const axios= require("axios")
const fs=require("file-system")
const functionality=require("../controllers/functionalities")
const qn=require("../commandLine/questions")

module.exports = function () {

    async function makeRequestL(answers) {
      const config = {
        method: "post",
        url: "http://localhost:4000/signin",
        data: answers
      };
      let res = await axios(config);
      console.log(res.data.token)
      fs.writeFile("token.txt",res.data.token, function (err) {
          if (err) throw err;
        //   console.log(res.data.token);
          // console.log("token Saved!");
      });
      
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      // This arrangement can be altered based on how we want the date's format to appear.
      // let currentDate = `${day}-${month}-${year}`;

    // const token=fs.readFileSync("data.txt","utf8");
    const passbook=`
      -------------------------------------------------------------------
                        ------------------        
                        | Bank of Origin |
                        ------------------     
                                                                                       
        Name: ${answers.FirstName} ${answers.LastName}                                                 
        S/D/H/o: ${answers.FatherName}
        Account No: ${res.data.AccountNo}     
        CIF No: ${res.data.CIF}     
        A/c Type:${res.data.Type}                                                                                                                                   
        Address: ${answers.Address}                                                                            
        Phone No: ${answers.PhoneNo}                                                                                
        Email: ${answers.Email}   
        AadhaarCard: ${answers.AadhaarCard}
        Gender: ${answers.Gender}
        Age: ${answers.Age} 
        Date of Issue: ${day}-${month}-${year}                                                                    
                                                                                           
      -------------------------------------------------------------------
      `
      fs.writeFile("data.txt",passbook, function (err) {
        if (err) throw err;
        // console.log(res.data.token);
        // console.log("Passbook Generated successfully");
        
    });
      // console.log(res.data.token)
      
      console.log(passbook);
    
      console.log(res.data.message);
      functionality();
    // if (res.data.success === "true") {
    //   functionality();
    // };
  }

  inquirer.prompt(qn.loginQuestions).then((answers) => {
    makeRequestL(answers);
  });

}