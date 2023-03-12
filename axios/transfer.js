const token=require("../utility/retrieveUserToken")
const axios= require("axios")
const inquirer=require("inquirer")
const functionalities=require("../controllers/functionalities")
const qn=require("../commandLine/questions")

module.exports=()=>{
async function makeRequestT(answer) {
    const userToken=token()
    let res = await axios.get("http://localhost:4000/transfer",{
        data: answer
},{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    });
  
    console.log(res.data);
    functionalities()
  }

  inquirer.prompt(qn.QuestionT).then((answer)=>{
    makeRequestT(answer)
  })
}
