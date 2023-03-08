const fs = require("file-system");
const nolookalikes = require('nanoid-generate/nolookalikes');
require('../db/conn')
const User=require("../models/userSchema");
// const data1=require("../utility/dataRetrive")

module.exports=async(req,res)=>{
    const {FirstName, LastName, Email, Password, C_Password, Pin,Bank_Balance, AadhaarCard, PANCard, PhoneNo, FatherName,Address}=req.body//how to add address city and state
    // const city=req.body.Address.city;
    // const state=req.body.Address.state;
    if(!FirstName|| !LastName|| !Email|| !Password|| !C_Password|| !Pin||!Bank_Balance|| !AadhaarCard|| !PANCard|| !PhoneNo|| !FatherName|| !Address){
        return res.status(422).json({error:'error'})
    }
    // return res.json(req.body);
    
    try{
        const userEmail= await User.findOne({Email:Email});//database email: user input email
        const usePassword=await User.findOne({Password:Password});
        const usePin=await User.findOne({Pin:Pin});
        const fs=require("file-system")
        module.exports=()=>{
            const token=fs.readFileSync("token.txt","utf8");
            return token;
        }
        if(userEmail){
            return res.status(422).json({error:"Already exist Credentials1"});
        }
        else if(usePassword){
            return res.status(422).json({error:"Already exist Credentials2"});
        }
        else if(usePin){
            return res.status(422).json({error:"Already exist Credentials3"});
        }
        else{

            const AccountNo=nolookalikes(10);
            const user=new User({FirstName, LastName, Email, Password, C_Password, Pin, AccountNo,Bank_Balance, AadhaarCard, PANCard, PhoneNo, FatherName, Address});

            
            
            //randomly generated AccountNo 
            // fs.writeFile("accountNumber.txt",user.AccountNo, function (err) {
            //     if (err) throw err;
            //     console.log("accountNo Saved!");
            // });

//hashing the password, randomly generated AccountNo need to be added here***********************************************************************************************
            // const userRegister=await user.save();
            await user.save();
            
            
            // const dataMain=data1();
            // console.log(dataMain.data)
            // const token=fs.readFileSync("data.txt","utf8");
            res.status(201).json({message:"user registered successfully",AccountNo});

        }
        

    }
    catch(err){
        console.log(err);
    }
}