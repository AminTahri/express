const express=require("express");
const app=express();
const path=require("path")
const PORT=process.env.PORT|| 3000;

// app.get("/",(req,res)=>res.send("<h1> Hello </h1>"))
app.use(timeMid=(req,res,next)=>{
    const date = new Date();
    const day=date.getDay()
    let hours = date.getHours();
    if(day>0 && day<6 && hours>8 && hours<17){
        next()
    }  else{
        res.sendFile(path.join(__dirname,"public","off.html"))
    }
}) 
app.use(express.static(path.join(__dirname,"public")));
// timeMid()

app.listen(PORT,err=>err?console.log(err):console.log(`server is successfully on port ${PORT}`))
