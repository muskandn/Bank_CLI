const data=require("../utility/dataRetrive")
const axios= require("axios")
const fs=require("file-system")

async function makeRequestR(answers) {
    const config = {
        method: "post",
        url: "http://localhost:4000/register",
        data: answers
      };
    
      let res = await axios(config);

      fs.writeFile(
        "accountNumber.txt",
        res.data.AccountNo,
        function (err) {
          if (err) throw err;
          console.log("AccountNo Saved in your device!");
        }
      );

      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      // This arrangement can be altered based on how we want the date's format to appear.
      // let currentDate = `${day}-${month}-${year}`;
      

      fs.writeFile("data.txt",passbook, function (err) {
        if (err) throw err;
        // console.log(res.data.token);
        console.log("Passbook Generated successfully");
    });

    // const token=fs.readFileSync("data.txt","utf8");
    const passbook=`
      -------------------------------------------------------------------
                        ------------------        
                        | Bank of Origin |
                        ------------------     
                                                                                       
        Name: ${answers.FirstName} ${answers.LastName}                                                 
        S/D/H/o: ${answers.FatherName}
        Account No.: ${res.data.AccountNo}                                                                                                                                            
        Address: ${answers.Address}                                                                            
        Phone No: ${answers.PhoneNo}                                                                                
        Email: ${answers.Email}    
        AadhaarCard: ${answers.AadhaarCard}
        Date of Issue: ${day}-${month}-${year}                                                                    
                                                                                           
      -------------------------------------------------------------------
      `
      
      console.log(passbook);
    
  }

module.exports=makeRequestR;