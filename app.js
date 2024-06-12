const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {contactmodel}=require("./models/contact")

const app=express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{
    let input=req.body
    console.log(input)
    res.json({status:"success"})
})

app.listen(8335,()=>{
    console.log("server started")
})