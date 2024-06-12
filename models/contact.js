const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
    "fname":{type:String,required:true},
    "lname":{type:String,required:true},
    "mob":{type:String,required:true},
    "email":{type:String,required:true},
    "address":{type:String,required:true}
    }
)
let contactmodel=mongoose.model("Contacts",schema);
module.exports={contactmodel}