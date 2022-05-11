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
    Password:{
        type:String,
        
    },
    BillingAddress:{
        type:String,
        
    },
    City:{
        type:String,
        
    },
    CompanyName:{
        type:String,
        
    },
    GstNo:{
        type:String,
        
    },

},{
timestamps:true
})
module.exports = mongoose.model("customer",customerSchema)