const fs = require("file-system");
require('../db/conn')
const User=require("../models/userSchema");

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

        if(userEmail){
            return res.status(422).json({error:"Already exist Credentials"});
        }
        else if(usePassword){
            return res.status(422).json({error:"Already exist Credentials"});
        }
        else if(usePin){
            return res.status(422).json({error:"Already exist Credentials"});
        }
        else{
            const user=new User({FirstName, LastName, Email, Password, C_Password, Pin, Bank_Balance, AadhaarCard, PANCard, PhoneNo, FatherName, Address});

            
            //randomly generated AccountNo 
            fs.writeFile("accountNumber.txt",user.AccountNo, function (err) {
                if (err) throw err;
                console.log("accountNo Saved!");
            });

//hashing the password, randomly generated AccountNo need to be added here***********************************************************************************************
            // const userRegister=await user.save();
            await user.save();
            
            res.status(201).json({message:"user registered successfully"});
        }
        

    }
    catch(err){
        console.log(err);
    }
}