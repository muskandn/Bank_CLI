const token=require("../utility/retrieveUserToken")
const axios= require("axios")

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
  }

module.exports=makeRequestP;