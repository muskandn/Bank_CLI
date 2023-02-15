const mongoose=require("mongoose");
const bcrypt= require("bcryptjs");
const jwt=require('jsonwebtoken');
const { required } = require("nodemon/lib/config");


const transactionSchema=new mongoose.Schema({
    sendPin:{
        type: String,
        required: true
    },
    receiverPin:{
        type:String,
        required: true,
        default: null
    },
    Amount:{
        type:Number,
        required:true
    },
    transactionType:{
        type:String,
        enum:["deposite","withdraw","transaction"]
    },
    transactionDate:{
        type:Date,
        default: Date.now
    }


    
})


//we are hashing the password
//middle ware 

////****************************************************************************************/
//pin is in transaction schema and account no is in details schema So how to hash both
transactionSchema.pre('save',async function(next){//no need to add res,req
    
    this.receiverPin=await bcrypt.hash(this.receiverPin,12);
    
    
    next()
});




const transaction=mongoose.model("TRANSACTION",transactionSchema);
module.exports=transaction;

