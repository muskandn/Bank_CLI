const mongoose=require("mongoose");
const bcrypt= require("bcryptjs");
const jwt=require('jsonwebtoken');
const { required } = require("nodemon/lib/config");


const detailsSchema=new mongoose.Schema({
    FirstNameR:{
        type:String,
        required: true
    },
    LastNameR:{
        type:String,
        required: true
    },
    AccountNoR:{
        type:String,
        required: true,
        unique:true
    },
    Amount: {
        type:Number,
        required: true,
        validator(value){
            if(value<1000){
                throw new Error("Your account balance is less than required")
            }
        }
    },
    TransactionDate:{
        type:Date,
        default: Date.now
    }
})

const detail =mongoose.model("Detail",detailsSchema)

const transactionSchema=new mongoose.Schema({
    Email:{
        type: String,
        required: true
    },
    Pin:{
        type:String,
        required: true
    },
    transactionDetails:[detailsSchema]
    
})


//we are hashing the password
//middle ware 

////****************************************************************************************/
//pin is in transaction schema and account no is in details schema So how to hash both
detailsSchema.pre('save',async function(next){//no need to add res,req
    if(this.isModified('Pin')){
        this.Pin=await bcrypt.hash(this.Pin,12);
        this.AccountNo=await bcrypt.hash(this.AccountNo,12);
    }
    
    next()
});


const transaction=mongoose.model("TRANSACTION",transactionSchema);
module.exports=transaction;

