
const User=require("../models/userSchema");
const Transaction=require("../models/transactionSchema")


module.exports=async(req,res)=>{
    const Amount=req.body.Amount;
    const receiverAccount=req.body.receiverAccount;
    const balance= req.authuser.Bank_Balance;
    const senderAccount=req.authuser.AccountNo;
    const transactionType="transfer";
    

    // const isMatchAccountNo=await bcrypt.compare(AccountNo,receiverAccount)
    const isMatchAccountNo= await User.findOne({AccountNo:receiverAccount});
    if(isMatchAccountNo){
        try{
            if(balance<1000){
                return res.json({message:`Current Bank_Balance ${balance}... less than required.`});
                
            }
            else{
        
                await User.updateOne({Email:req.authuser.Email},{
                    $set:{
                        Bank_Balance: Number(balance)-Number(Amount)
                    }
                    
                })  
                await User.updateOne({AccountNo:receiverAccount},{
                    $set:{
                        Bank_Balance: Number(balance) + Number(Amount)
                    }
                })

                const transaction=new Transaction({senderAccount,receiverAccount,Amount,transactionType})
                        
                await transaction.save();
                res.json({message:"transfer is done and transaction history stored successfully"})
                        console.log("transaction history stored successfully")
            }
        }
        catch(err){
            console.log(err);
        }
    }else{
        res.json({message:"This receiver doesn't exit in out database"})
    }
}


