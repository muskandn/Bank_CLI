const express=require("express")
const bodyparser=require("body-parser");
const mongoose = require("mongoose");
const dotenv=require("dotenv")
const app=express();
const cookieParser = require('cookie-parser')

dotenv.config({path:'./.env'})//write only once in app.js and use process in any of the files in the projects 

require("./db/conn")
const User= require("./models/userSchema");

app.use(express.json());
app.use(cookieParser());

//we link the router files to make out route easy--------it is middleware
app.use(require('./router/auth'));
const PORT=process.env.PORT;



app.listen(PORT,()=>{
     console.log(`Started running on port ${PORT}`)
})