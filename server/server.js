const express=require("express");
const router=require("./routes/routes.js");

const app=express()

const cors=require("cors")
require('./models/db.js');
app.use(express.json())//content type 
app.use(cors())


app.use('/api/tasks',router)

app.listen('8000',(err)=>{
    if(err)
    console.log(err)
console.log("Server running at port 8000")
})