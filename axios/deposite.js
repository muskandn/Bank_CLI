const token=require("../utility/retrieveUserToken")
const axios= require("axios")

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
  }

module.exports=makeRequestD;