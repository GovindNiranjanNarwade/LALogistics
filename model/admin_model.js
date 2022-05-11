const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        
        default:false
    },

},{
timestamps:true
})
module.exports = mongoose.model("admin",adminSchema)