const fs=require("file-system")
module.exports=()=>{
    const token=fs.readFileSync("data.txt","utf8");
    return token;
}