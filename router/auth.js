
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

const registerController=require("../controllers/register")
const singinController=require("../controllers/login")
const checkBalanceController=require("../controllers/balance")
const withdrawalController=require("../controllers/withdraw")
const depesiteController=require("../controllers/deposite")
const transferController=require("../controllers/transfer")
const transactionHistoryController=require("../controllers/history")
const deleteController=require("../controllers/delete")


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

    


//register route
router.post('/register',registerController)

//login route
router.post('/signin',singinController);

//checking balance route 
router.get('/balance',Authenticate,checkBalanceController)

//withdrawal route
router.get('/withdrawal',Authenticate,withdrawalController)

//deposite route
router.get('/deposite',Authenticate,depesiteController)

//transfer route
router.get('/transfer',Authenticate,transferController)

//get transaction history route
router.get('/history',Authenticate,transactionHistoryController)

//signout means deleting the existing user route
router.post('/delete',Authenticate,deleteController)

module.exports=router;

