const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    CustomerId:{
        type:String,
        
    },
    CustomerName:{
     type:String,
    },
    Email:{
        type:String,
      
    },
    Mobile:{
        type:Number,
        
    },
   
    SourceId:{
        type:String,
        
    },
   
    CompanyName:{
        type:String,
        
    },
    GstNo:{
        type:String,
        
    },
    StateId:{
        type:Number
    },
    Cityid:{
        type:String
    },
  

},{
timestamps:true
})
module.exports = mongoose.model("customer",customerSchema)