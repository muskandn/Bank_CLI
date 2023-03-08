
const User=require("../models/userSchema");


module.exports=async(req,res)=>{
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
    // const balance= req.authuser.Bank_Balance
    // if(balance<1000){
    //     res.json({message:`Current Bank_Balance ${balance}. It should be greater than Rs.1000 for user benefit`});
    //     console.log(`Current Bank_Balance ${balance}. It should be greater than Rs.1000 for user benefit`);
    // }else{
    //     res.json({message:`Current Bank_Balance ${balance}`})
    //     console.log(`Current Bank_Balance ${balance}`)
    // }
    try{
        return res.json({
            message: `your bank balance is ${req.authuser.Bank_Balance}`,
        });
    }catch(Err){
        console.log(Err)
    }
}