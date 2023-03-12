const token=require("../utility/retrieveUserToken")
const axios= require("axios")
const functionalities=require("../controllers/functionalities")
module.exports=()=>{
  async function balanceRequest() {
    const userToken=token()
    let res = await axios.get("http://localhost:4000/balance",{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    });
  
    console.log(res.data);
    functionalities()
  }


  balanceRequest();
}


