const fs=require("file-system")
module.exports=()=>{
    const token=fs.readFileSync("token.txt","utf8");
    return token;
}