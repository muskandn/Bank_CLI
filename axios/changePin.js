
const inquirer=require("inquirer")
const token=require("../utility/retrieveUserToken")
const axios= require("axios")
const functionalities=require("../controllers/functionalities")
const qn=require("../commandLine/questions")
module.exports=()=>{
  async function makeRequestP(answer) {
    
    const userToken=token()
    let res = await axios.get("http://localhost:4000/changePin",{
        data: answer
  },{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    });
  
    console.log(res.data);
    functionalities()
  }


  inquirer.prompt(qn.QuestionPin).then((answers)=>{
    makeRequestP(answers)
  })
  
}