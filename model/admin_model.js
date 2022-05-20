const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    Name:{
        type:String,
        
    },
    Email:{
        type:String,
       
    },
    Password:{
        type:String,
        
    },
    otp:{
        type:String,
        
    },
    GroupId:{
        type:Number
    }
    

},{
timestamps:true
})
module.exports = mongoose.model("admin",adminSchema)