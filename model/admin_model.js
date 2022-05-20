const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    GroupId:{
        type:Number
    },
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
  
    

},{
timestamps:true
})
module.exports = mongoose.model("admin",adminSchema)