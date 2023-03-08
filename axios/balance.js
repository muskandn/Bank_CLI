const token=require("../utility/retrieveUserToken")
const axios= require("axios")

async function balanceRequest() {
    const userToken=token()
    let res = await axios.get("http://localhost:4000/balance",{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    });
  
    console.log(res.data);
  }

module.exports=balanceRequest;