const User=require("../models/userSchema");
const Transaction=require("../models/transactionSchema")
const { updateOne } = require("../models/userSchema");
const bcrypt = require('bcryptjs');



module.exports=async(req,res)=>{
    const Amount=req.body.Amount;
    const Pin=req.body.Pin;
    const balance= req.authuser.Bank_Balance;
    const senderAccount=req.authuser.AccountNo;
    const transactionType="deposite";
    const receiverAccount=null;

    try{  
        const userLogin= await User.findOne({Email:req.authuser.Email});
            if(userLogin){
                const isMatch=await bcrypt.compare(Pin,userLogin.Pin)
            }
        if(isMatch){
        await User.updateOne({Pin:req.authuser.Pin},{
            $set:{
                Bank_Balance: Number(balance) + Number(Amount)
            }
            
        })  
        const transaction=new Transaction({senderAccount,receiverAccount,Amount,transactionType})
                
        await transaction.save();
            res.json({message:"deposition is done and transaction history stored successfully"})
                console.log("transaction history stored successfully")
        }
    }
    
    catch(err){
        console.log(err);
    }
}