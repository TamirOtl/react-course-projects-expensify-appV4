const path=require("path");
const express=require('express');
const app=express();
const PublicPath=path.join(__dirname,"..","public");
const port=process.env.PORT||3000;
const port1 =process.env.PORT||2020;
app.use(express.static(PublicPath));
app.get("*",(req,res)=>{
    res.sendFile(path.join(PublicPath,'index.html'));
});
app.listen(port,()=>{
   console.log("server is up!"); 
});
app.listen(port1,()=>{
    console.log("server is up!"); 
 });