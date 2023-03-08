// const fs = require("file-system");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require('../db/conn')
const User=require("../models/userSchema");


module.exports=async(req,res)=>{
    try{
        const {Email, Password, Pin,AccountNo}=req.body
        if(!Email || !Password || !Pin){
            return res.status(400).json({error:"Please fill all the fields"})
        }

        const userLogin= await User.findOne({Email:Email});
        if(userLogin){
            const isMatch=await bcrypt.compare(Password,userLogin.Password)//for comparing the user entered password with the stored encrypted password
            const isMatchPin=await bcrypt.compare(Pin,userLogin.Pin)
            // const isMatchAccountNo=await bcrypt.compare(AccountNo,userLogin.AccountNo)
            if(!isMatch){
                res.status(400).json({error:"Invalid credentials1"})
            }
            else if(!isMatchPin){
                res.status(400).json({error:"Invalid credentials2"})
            }
            // else if(!isMatchAccountNo){
            //     res.status(400).json({error:"Invalid credentials3"})
            // }
            else{
                const token=await userLogin.generateAuthToken();
                // console.log(token)
                


                // fs.writeFile("token.txt",token, function (err) {
                //     if (err) throw err;
                //     console.log("token Saved!");
                // });
                res.json({message:"user Signin Successfully",token});
                }
        }else{
            res.status(400).json({error:"Invalid credentials.................."})
        }
    }catch(err){
        console.log(err);
    }
}