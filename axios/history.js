const token=require("../utility/retrieveUserToken")
const axios= require("axios")

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
  }

module.exports=makeRequestH;