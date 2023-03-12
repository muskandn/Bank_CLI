const token=require("../utility/retrieveUserToken")
const axios= require("axios")
const inquirer=require("inquirer")
const functionalities=require("../controllers/functionalities")
const qn=require("../commandLine/questions")  

module.exports=()=>{
async function makeRequestH(answer) {
    const userToken=token()
    let res = await axios.get("http://localhost:4000/history",{
        data: answer
},{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    });
  
    console.log(res.data);
    functionalities();
  }
  //inquirer
  makeRequestH()
}
