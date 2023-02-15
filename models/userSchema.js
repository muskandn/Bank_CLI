const mongoose=require("mongoose")
const bcrypt= require("bcryptjs")
const jwt=require('jsonwebtoken')
const nolookalikes = require('nanoid-generate/nolookalikes');
var Evalidator = require("email-validator");
var Avalidator = require('aadhaar-validator');


// import { nanoid } from 'nanoid'

const userSchema= new mongoose.Schema({
    FirstName:{
        type:String,
        required: true
    },
    LastName:{
        type:String,
        required: true
    },
    Email: {
        type:String,
        required: true,
        unique:true,
        validator(value){
            if(!Evalidator(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    Password: {
        type:String,
        required: true,
        unique:true
    }, 
    C_Password: {
        type:String,
        required: true,
        unique:true
    }, 
    Pin: {
        type:String,
        required: true,
        unique:true
    },
    AccountNo:{
        type: String,
        required: true,
        default:nolookalikes(10),
        index: { unique: true },// default is not working still now in postman need to add the account no all the time!!!!!!!!!!!!
    },
    // Expiry_Date: Current date + fixed period of time
    Bank_Balance: {
        type:Number,
        required: true,
        validator(value){
            if(value<1000){
                throw new Error("Your account balance is less than required")
            }
        }
    },
    AadhaarCard: {
        type:String,
        required: true,
        maxlength:12,
        minlength:12,
        validator(value){
            if(!Avalidator(value)){
                throw new Error("Aadhaar card no is invalid");
            }
        }
    },
    PANCard: {
        type:String,
        required: true,
        maxlength:10,
        minlength:10,
        // unique:true
    },
    PhoneNo: {
        type:String,
        required: true,
        maxlength:10,
        minlength:10,
        // unique:true
    },
    FatherName:{
        type:String,
        required: true
    },
    Address:{

        type:String
    },
    OpeningDate:{
        type:Date,
        default: Date
    },

    tokens:[
        {
            token:{
            type: String,
            required: true
            }
        }
    ]
    
})

//we are hashing the password
//middle ware
userSchema.pre('save',async function(next){//no need to add res,req
    if(this.isModified('Password')){
        
        this.Password=await bcrypt.hash(this.Password,12);  
        this.C_Password=await bcrypt.hash(this.C_Password,12);
        this.Pin=await bcrypt.hash(this.Pin,12);
        this.AccountNo=await bcrypt.hash(this.AccountNo,12);
    }
    
    next()
});



userSchema.methods.generateAuthToken=async function(){
    try{
        const token_G= jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token_G});
        await this.save();
        return token_G;
    }catch(err){
        console.log(err)
    }
}

const user=mongoose.model("USER",userSchema);
module.exports=user;

