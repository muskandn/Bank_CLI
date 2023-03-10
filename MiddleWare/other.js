
const jwt=require("jsonwebtoken")
const userSchema=require("../models/userSchema")
// const fs=require("file-system")
// var token=fs.readFileSync("token.txt","utf8");

const token=require("../utility/retrieveUserToken")
const Authenticate=async (req,res,next)=>{
    try{   
        // console.log("SFdghnmj")
        const userToken=token();
        // userTokenString=userToken.toString();
        console.log(userToken)
        // console.log(userTokenString)
        const verifyUser=await jwt.verify(
            userToken,
            process.env.SECRET_KEY);
        const authuser=await userSchema.findOne({
            _id:verifyUser._id,
            });
        if(!authuser){
            throw new Error("User not Found")
        }
        
        req.authuser=authuser;
        req.userID=authuser._id;
        next()

    }catch(err){
        res.status(401).json({error:"Unauthorized: No token provided"})
        // console.log(err);
    }
}

module.exports=Authenticate

