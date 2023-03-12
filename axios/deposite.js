const token=require("../utility/retrieveUserToken")
const axios= require("axios")
const inquirer=require("inquirer")
const functionalities=require("../controllers/functionalities")
const qn=require("../commandLine/questions")  

module.exports=()=>{
async function makeRequestD(answer) {
    const userToken=token()
    let res = await axios.get("http://localhost:4000/deposite",{
        data: answer
},{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    });
  
    console.log(res.data);
    functionalities()
  }
  
  inquirer.prompt(qn.QuestionD).then((answer)=>{
    makeRequestD(answer)
  })
}