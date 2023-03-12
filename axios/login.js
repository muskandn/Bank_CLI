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