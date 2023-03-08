
const axios= require("axios")
const fs=require("file-system")
async function makeRequestL(answers) {
    const config = {
        method: "post",
        url: "http://localhost:4000/signin",
        data: answers
      };
      let res = await axios(config);
      fs.writeFile("token.txt",res.data.token, function (err) {
          if (err) throw err;
          console.log(res.data.token);
          console.log("token Saved!");
      });
      
    
      console.log(res.data);
  }

module.exports=makeRequestL;