
const jwt=require("jsonwebtoken")
const userSchema=require("../models/userSchema")

const Authenticate=async (req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        const verifyUser=await jwt.verify(token,process.env.SECRET_KEY);
        // console.log(verifyUser)
        const authuser=await userSchema.findOne({_id:verifyUser._id,"tokens.token":token});
        if(!authuser){
            throw new Error("User not Found")
        }
        req.token=token;
        req.authuser=authuser;
        req.userID=authuser._id;

        // console.log(user);


        next()

    }catch(err){
        res.status(401).json({error:"Unauthorized: No token provided"})
        console.log(err);
    }

    
}

module.exports=Authenticate