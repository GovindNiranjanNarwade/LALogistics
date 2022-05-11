const mongoose = require("mongoose")
const DRSDetailsSchema = mongoose.Schema({
    Branch:{
        type:String,
        
    },
    DRS:{
        type:String,
        
    },
    Date:{
        type:Date
    },
    Time:{
        type:String
    },
    Vendor:{
        type:String,
    },
    Vechical:{
        type:String,
    },
    PlantName:{
        type:String
    },
    GateInDate:{
        type:Date,
        
    },
    GateINTime:{
        type:String,
      
    },
    GateOutDate:{
        type:Date,
        
    },
    GateOutTime:{
        type:String,
      
    },
    DeliveredBy:{
        type:String,
        
    },
    DeliveryBoyName:{
        type:String,
       },
    BookingDate:{
        type:Date,
        
    },
    Customer:{
        type:String,
        
    },
    Destination:{
        type:String,
        
    },
    Origin:{
        type:Date,
        
    },
    Consignee:{
        type:String,
        
    },
    Consigner:{
        type:String,
        
    },
    ArrivalDate:{
        type:String,
        
    },
    Packgs:{
        type:Number,
        
    },
    Weight:{
        type:String,
        
    },
   
    DeliveryDate:{
        type:Date,
        
    },
    DeliveryTime:{
        type:String,
        
    },
    Remark:{
        type:String
    },
  

},{
timestamps:true
})
module.exports = mongoose.model("DRSDetails",DRSDetailsSchema)