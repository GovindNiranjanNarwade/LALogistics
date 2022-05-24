const mongoose = require("mongoose")
const officeSchema = mongoose.Schema({
    AdminName:{
        type:String,
        
    },
    Email:{
        type:String,
      
    },
    Mobile:{
        type:Number,
        
    },
    Role:{
        type:String,
       },
    Password:{
        type:String,
        
    },
    Address:{
        type:String,
        
    },
    City:{
        type:String,
        
    },
    State:{
        type:String,
        
    },
    GroupId:{
        type:Number
    },
    Role:{
        type: String,
  default: 'officeAdmin',
  enum: ["admin", "officeAdmin", "deliveryBoy","customer","SuperAdmin"]
    }

},{
timestamps:true
})
module.exports = mongoose.model("officeAdmin",officeSchema)