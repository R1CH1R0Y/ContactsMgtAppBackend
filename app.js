const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {contactmodel}=require("./models/contact")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Richi2001:R1CH1R0Y@cluster0.ulfkc.mongodb.net/ContactDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let contact=new contactmodel(input)
    console.log(contact)
    contact.save()
    res.json({status:"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    contactmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch()
})

app.post("/remove",(req,res)=>{
    let input=req.body
    contactmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({status:"success"})
        }
    ).catch(
        (error)=>{
            res.json({status:"error"})
        }
    )
})

app.post("/view",(req,res)=>{
    contactmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            alert(error.message)
        }
    )
})

app.listen(8335,()=>{
    console.log("server started")
})