const inquirer = require("inquirer");
const axios = require("axios");
const retrieveUserToken = require("../utility/retrieveUserToken");
const fs = require("fs");
const qn=require("../commandLine/questions")



module.exports=()=>{

    const fdChooses = ["1. Make fd", "2. Withdraw fd"];

  // choose options question
    const chooseOption = [
    {
        type: "input",
        name: "fd",
        message: "Enter option: ",
    },
    ];



    async function fdRequest(answers) {
        const userToken = retrieveUserToken();
    
        let res = await axios.post(
            "http://localhost:4000/fdCreate",
            {
                data: answers,
            },
            {
            headers: {
            Authorization: `Bearer ${userToken}`,
            },
        }
        );
        

        fdPassbook = `
        ----------------------------------------------------------------
                            | Bank of Origin |
                            ------------------
            Name: ${res.data.newFd.name}
            Account Number: ${res.data.newFd.accountNumber}
            Token: ${res.data.newFd.token}
            Amount: ${res.data.newFd.amount},
            Interest Rate: ${res.data.newFd.interest}
            Minimum time: ${res.data.newFd.min}
            Maximum time: ${res.data.newFd.max}
            Fd Date: ${res.data.newFd.fdDate}
            Nomine: ${res.data.newFd.nomine}
        -----------------------------------------------------------------
        `;
        
        fs.writeFile("fdPassbook.txt",fdPassbook, function (err) {
            if (err) throw err;
            // console.log(res.data.token);
            // console.log("Passbook Generated successfully");   
        });
    
        console.log(fdPassbook);
    
        }
    
        const fdOptions = fs.readFileSync("Options_of_fd.txt", "utf-8");
    
        fdChooses.forEach((element) => {
        console.log(element);
    });

    async function withdFdRequest(answers){

        const userToken = retrieveUserToken();
    
        let res = await axios.post(
            "http://localhost:4000/fdWithdraw",
            {
                data: answers,
            },
            {
            headers: {
            Authorization: `Bearer ${userToken}`,
            },
        }
        );

        console.log(res.data);
    }


    //inquirer

    inquirer.prompt(chooseOption).then((answer)=>{
        if(answer.fd==='1'){
            console.log(fdOptions)
            inquirer.prompt(qn.fdQues).then((answer)=>{
                fdRequest(answer)
            })
        }
        else if(answer.fd==='2'){
            inquirer.prompt(qn.withdFd).then((answer)=>{
                withdFdRequest(answer)
            })
        }
    })
}