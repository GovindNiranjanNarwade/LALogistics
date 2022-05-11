const mongoose = require("mongoose")
const pickupDetailsSchema = mongoose.Schema({
    Date:{
        type:String,
        
    },
    Time:{
        type:String,
      
    },
    JobTitle:{
        type:String,
        
    },
    Reference:{
        type:String,
       },
    Department:{
        type:String,
        
    },
    Customer:{
        type:String,
        
    },
    Destination:{
        type:String,
        
    },
    Origin:{
        type:String,
        
    },
    State:{
        type:String,
        
    },
    Consigner:{
        type:String,
        
    },
    GrossWeight:{
        type:String,
        
    },
    NoOfPcs:{
        type:Number,
        
    },
    PickupTime:{
        type:String,
        
    },
    Contents:{
        type:String,
        
    },
    PackegeType:{
        type:String,
        
    },
    PickupRegistered:{
        type:String,
        
    },
    Remark:{
        type:String,
        
    },
    

},{
timestamps:true
})
module.exports = mongoose.model("pickupDetails",pickupDetailsSchema)