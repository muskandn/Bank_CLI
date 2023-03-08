const token=require("../utility/retrieveUserToken")
const axios= require("axios")

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
  }

module.exports=makeRequestT;