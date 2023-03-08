const mongoose=require("mongoose")


//connect with database
const DB=process.env.DATABASE;

mongoose.set("strictQuery", false);
mongoose.connect(DB).then(()=>{
    console.log("Database successfully connected")
}).catch((err)=>{
    console.log(err);
})
