
const Transaction=require("../models/transactionSchema")
module.exports=async(req,res)=>{
    try{    
        const data=await Transaction.find({senderAccount:req.authuser.AccountNo})
            res.send(data)
        // const transaction=new Transaction({senderAccount,receiverAccount,Amount,transactionType})
                
        // await transaction.save();
        //     res.json({message:"deposition is done and transaction history stored successfully"})
        //         console.log("transaction history stored successfully")
    }
    catch(err){
        console.log(err);
    }
}