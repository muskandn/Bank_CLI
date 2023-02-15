const bcrypt = require('bcryptjs');
const express=require("express");
const router=express.Router();
const Authenticate=require("../MiddleWare/other");
var fs = require("file-system");
const cookieParser = require('cookie-parser')

require('../db/conn')
const User=require("../models/userSchema");
const Transaction=require("../models/transactionSchema")

router.get('/',(req,res)=>{
    res.send("hellow world")

})



// router.post('/register',async(req,res)=>{
//     const {FirstName, LastName, Email, Password, C_Password, Pin,Bank_Balance, AadhaarCard, PANCard, PhoneNo, FatherName, Address}=req.body//how to add address city and state
//     if(!FirstName|| !LastName|| !Email|| !Password|| !C_Password|| !Pin||!Bank_Balance|| !AadhaarCard|| !PANCard|| !PhoneNo|| !FatherName|| !Address){
//         return res.status(422).json({error:'error'})
//     }
//     // return res.json(req.body);
    
    
//     User.findOne({Email:Email})//database email: user input email
//     .then((userExit)=>{
//         if(userExit){
//             return res.status(422).json({error:"Email already exist"});
//         }
//         const user=new User({FirstName, LastName, Email, Password, C_Password, Pin,Bank_Balance, AadhaarCard, PANCard, PhoneNo, FatherName, Address});

        
//         user.save().then(()=>{
//                 res.status(201).json({message:"user registered successfully"});
//             }).catch((err)=>res.status(500).json({error:"Failed to registered"}));
//         })
//     }).catch((err)=>{
//         console.log(err);
//     });

    



router.post('/register',async(req,res)=>{
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
})




//login router
router.post('/signin',async(req,res)=>{
    try{
        const {Email, Password, Pin,AccountNo}=req.body
        if(!Email || !Password || !Pin){
            return res.status(400).json({error:"Invalid credentials"})
        }

        const userLogin= await User.findOne({Email:Email});
        if(userLogin){
            const isMatch=await bcrypt.compare(Password,userLogin.Password)//for comparing the user entered password with the stored encrypted password
            const isMatchPin=await bcrypt.compare(Pin,userLogin.Pin)
            const isMatchAccountNo=await bcrypt.compare(AccountNo,userLogin.AccountNo)
            if(!isMatch){
                res.status(400).json({error:"Invalid credentials1"})
            }
            else if(!isMatchPin){
                res.status(400).json({error:"Invalid credentials2"})
            }
            else if(!isMatchAccountNo){
                res.status(400).json({error:"Invalid credentials3"})
            }
            else{
                const token=await userLogin.generateAuthToken();
                console.log(token)
                
                fs.writeFile("token.txt",token, function (err) {
                    if (err) throw err;
                    console.log("token Saved!");
                });
                res.json({message:"user Signin Successfully"});
                }
        }else{
            res.status(400).json({error:"Invalid credentials.................."})
        }
    }catch(err){
        console.log(err);
    }
});





router.get('/balance',Authenticate,async(req,res)=>{
    // try{
    //     const {Email,AccountNo}=req.body
    //     if(!Email){
    //         return res.status(400).json({error:"Invalid credentials"})
    //     }

    //     const userLogin= await User.findOne({Email:Email});
    //     if(userLogin){
    //         const isMatchAccountNo=await bcrypt.compare(AccountNo,userLogin.AccountNo)
    //         if(!isMatchAccountNo){
    //             res.status(400).json({error:"Invalid credentials3"})
    //         }
    //         else{
    //             // const userLogin= await User.findOne({Email:Email});
    //             const balance= req.authuser.Bank_Balance
    //             if(balance<1000){
    //                 res.json({message:`Current Bank_Balance ${balance}. It should be greater than Rs.1000 for user benefit`});
    //                 console.log(`Current Bank_Balance ${balance}. It should be greater than Rs.1000 for user benefit`);
    //             }else{
    //                 res.json({message:`Current Bank_Balance ${balance}`})
    //                 console.log(`Current Bank_Balance ${balance}`)
    //             }
                
    //         }}
    //     else{
    //         res.status(400).json({error:"Invalid credentials.................."})
    //     }
    // }catch(err){
    //     console.log(err);
    // }
    // console.log("sxdfcgvhbjnkml")
    const balance= req.authuser.Bank_Balance
    if(balance<1000){
        res.json({message:`Current Bank_Balance ${balance}. It should be greater than Rs.1000 for user benefit`});
        console.log(`Current Bank_Balance ${balance}. It should be greater than Rs.1000 for user benefit`);
    }else{
        res.json({message:`Current Bank_Balance ${balance}`})
        console.log(`Current Bank_Balance ${balance}`)
    }
    
})




router.get('/withdrawal',Authenticate,(req,res)=>{

    const withdrawal=req.body.withdrawal;
    const balance= req.authuser.Bank_Balance;

    if(balance<1000){
        return res.json({message:`Current Bank_Balance ${balance}... less than required.`});
        
    }
    else{

        User.updateOne({Email:req.authuser.Email},{
            $set:{
                Bank_Balance: balance-withdrawal
            }
            
        },(err,data)=>{
            if(err){
                return res.json({message:`error`})
            }
            else{
                res.json({message:"Withdrawal Successfull"})
                console.log("Withdrawal Successfull")
            }
        })  
    }
})



router.get('/deposite',Authenticate,(req,res)=>{

    const deposite=req.body.deposite;
    const balance= req.authuser.Bank_Balance;

        User.updateOne({Email:req.authuser.Email},{
            $set:{
                Bank_Balance: balance+deposite
            }
            
        },(err,data)=>{
            if(err){
                return res.json({message:`error`})
            }
            else{
                res.json({message:"Successfully deposited"})
                console.log("Successfully deposited")
            }
        })  
})





router.post('/transaction',Authenticate,async(req,res)=>{
    const {sendPin, receiverPin,Amount,transactionType}=req.body//how to add address city and state
    if(!Amount||!transactionType){
        return res.status(422).json({error:'error'})
    }
    if(transactionType=="deposite"){
        const transactionUser=new Transaction({sendPin:req.authuser._id,receiverPin:null,Amount,transactionType});

        await transactionUser.save()
        res.json({message:`Transaction successful....`})
    }
    else if(transactionType=="withdraw"){
        const transactionUser=new Transaction({sendPin:req.authuser._id,receiverPin:null,Amount,transactionType});

        await transactionUser.save()
        res.json({message:`Transaction successful....`})
    }
})




router.post('/delete',Authenticate,(req,res)=>{

        ///everything is working but the update function is not working???????????????????????????????????????????????
        User.findOneAndReplace(req.authuser._id,function(err){
            if(!err){
                console.log("Account successfully deleted");
                res.json({message:"Account successfully deleted"})
            }
        })
})


module.exports=router;

//enclusivity
//how ll you manage misconduct
//undermotivated
//introduce your community-- several activity and github and git init foss
//ppl impact ...for continuing that  