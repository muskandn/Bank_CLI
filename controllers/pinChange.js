const fs=require("file-system")
const bcrypt = require('bcryptjs');
const User=require("../models/userSchema");


module.exports=async(req,res)=>{
    const {AccountNo,Pin}=req.body
    let newPin=req.body.newPin

        if(!AccountNo|| !Pin ||!newPin){
            return res.status(400).json({error:"Please fill all the fields"})
        }

        const userLogin= await User.findOne({AccountNo: AccountNo});
        if(userLogin){
            //for comparing the user entered pin with the stored encrypted password
            const isMatchPin=await bcrypt.compare(Pin,userLogin.Pin)
            if(!isMatchPin){
                res.status(400).json({error:"Invalid credentials_p"})
            }
            else{

                let newpin= await newPin.toString()
                let latestPin=await bcrypt.hash(newpin,10);
                
                await User.updateOne(
                    {AccountNo: AccountNo},
                    {$set:{
                        Pin: latestPin,
                    }})
                res.json({message:"Pin has changed Successfully"});
                }
        }else{
            res.status(400).json({error:"Invalid credentials.................."})
        } 
}