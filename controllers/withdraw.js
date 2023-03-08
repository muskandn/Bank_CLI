const User=require("../models/userSchema");
const Transaction=require("../models/transactionSchema")
const { updateOne } = require("../models/userSchema");
// const bcrypt = require("bcrypt");

module.exports=async(req,res)=>{

    const Amount=req.body.Amount;
    const balance= req.authuser.Bank_Balance;
    const senderAccount=req.authuser.AccountNo;
    const transactionType="withdrawal";
    const receiverAccount=null;
    try{
        if(balance<Amount){
            return res.json({message:`Current Bank_Balance ${balance}... less than required.`});
            
        }
        else{
    
            await User.updateOne({Email:req.authuser.Email},{
                $set:{
                    Bank_Balance: Number(balance)-Number(Amount)
                }
                
            })  
            const transaction=new Transaction({senderAccount,receiverAccount,Amount,transactionType})
                    
            await transaction.save();
            res.json({message:"Withdrawal is done and transaction history stored successfully"})
                    console.log("transaction history stored successfully")
        }
    }
    catch(err){
        console.log(err);
    }
    
}