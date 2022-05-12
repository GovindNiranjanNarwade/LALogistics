const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
       
    },
    password:{
        type:String,
        
    },
    otp:{
        type:String,
        
    },
    isAdmin:{
        type:Boolean,
        
        default:false
    },

},{
timestamps:true
})
module.exports = mongoose.model("admin",adminSchema)