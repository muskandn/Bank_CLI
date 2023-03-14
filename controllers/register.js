const Evalidator = require("email-validator");
const Avalidator = require("aadhaar-validator");
const fs = require("file-system");

const nolookalikes = require('nanoid-generate/nolookalikes');
require('../db/conn')
const User=require("../models/userSchema");
const { numbers } = require("nanoid-generate");
// const data1=require("../utility/dataRetrive")

module.exports=async(req,res)=>{
    const {FirstName, LastName, Email, Password, C_Password, Pin,Bank_Balance, AadhaarCard, PANCard, PhoneNo,DOB,Age,Gender, FatherName,Address,Type}=req.body//how to add address city and state
    // const city=req.body.Address.city;
    // const state=req.body.Address.state;
    if(!FirstName|| !LastName|| !Email|| !Password|| !C_Password|| !Pin||!Bank_Balance|| !AadhaarCard|| !PANCard|| !PhoneNo||!DOB||!Age||!Gender|| !FatherName|| !Address||!Type){
        return res.status(422).json({error:'error'})
    }
    // return res.json(req.body);
    
    try{
        const userEmail= await User.findOne({Email:Email});//database email: user input email
        // const usePassword=await User.findOne({Password:Password});// as we are hashing the password so need to use bcrypt for matching it
        // const usePin=await User.findOne({Pin:Pin});
        const fs=require("file-system")
        module.exports=()=>{
            const token=fs.readFileSync("token.txt","utf8");
            return token;
        }
        if(userEmail){
            return res.status(422).json({error:"Already exist Credentials1"});
        }
        // else if(usePassword){
        //     return res.status(422).json({error:"Already exist Credentials2"});
        // }
        // else if(usePin){
        //     return res.status(422).json({error:"Already exist Credentials3"});
        // }
        // validation for email
        // else if (!Evalidator.validate(Email)) {
        //   return res.json({ error: "Incorrect input... please try again" });
        // }
        // // checking whether entired password or confirmed password is same or not.
        // else if (Password != C_Password) {
        //   return res.json({ error: "password doesn't match" });
        // }
        // else if (!Avalidator.isValidNumber(AadhaarCard)) {
        //     return res.json({ error: "Incorrect input... please try again" });
        // }

        // else if (!length(PhoneNo)===10){
        //     return res.json({ error: "Incorrect input... please try again" });
        // }
        // else if (!length(PANCard)===10){
        //     return res.json({ error: "Incorrect input... please try again" });
        // }
        // else if (!length(AadhaarCard)===12){
        //     return res.json({ error: "Incorrect input... please try again" });
        // }

        // else if(Bank_Balance<1000 || typeof Bank_Balance!="number"){
        //     return res.json({ error: "Incorrect input... please try again" });
        // }
        else{
            

            const AccountNo=nolookalikes(10);
            console.log(AccountNo);
            const CIF=nolookalikes(10);
            const user=new User({FirstName, LastName, Email, Password, C_Password, Pin, AccountNo,CIF,Bank_Balance, AadhaarCard, PANCard, PhoneNo,DOB,Age, Gender, FatherName, Address,Type});

            
            // console.log(AccountNo);
            //randomly generated AccountNo 
            fs.writeFile("accountNumber.txt",user.AccountNo, function (err) {
                if (err) throw err;
                console.log("accountNo Saved!");
            });
            fs.writeFile("CIFNumber.txt",CIF, function (err) {
                if (err) throw err;
                console.log("CIFNo Saved!");
            });

//hashing the password, randomly generated AccountNo need to be added here***********************************************************************************************
            // const userRegister=await user.save();
            
            
            const userRegister = await user.save();
            console.log(userRegister)
            if(!userRegister){
                res.status(404).json({ message: "user is not registered successfully"});
            }

            // const userLogin = await User.findOne({ Email: Email });
            // console.log(userLogin)

            // if (userRegister) {
            //   const token = await userLogin.generateAuthToken();
            //   res.status(201).json({message: "user registered successfully", AccountNo, token});
            // } else {
            //   res.status(404).json({ message: "user is not registered successfully"});
            // }
            // await user.save();

            res.status(201).json({message: "user registered successfully",AccountNo,CIF});
            // const dataMain=data1();
            // console.log(dataMain.data)
            // const token=fs.readFileSync("data.txt","utf8");
            // res.status(201).json({message:"user registered successfully",AccountNo});

        }
        

    }
    catch(err){
        console.log(err);
    }
}