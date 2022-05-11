const mongoose = require("mongoose")
const podDetailsSchema = mongoose.Schema({
    Branch:{
        type:String,
        
    },
    GateInDate:{
        type:String,
        
    },
    GateINTime:{
        type:String,
      
    },
    GRType:{
        type:String,
        
    },
    GR:{
        type:String,
       },
    BookingDate:{
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
    DeliveryBoyName:{
        type:String,
        
    },
    DeliveryDate:{
        type:String,
        
    },
    DeliveryTime:{
        type:String,
        
    },
    DestinationReletaion:{
        type:String,
        
    },
    DRS:{
        type:String,
        
    },
    ReceivedBy:{
        type:String,
        
    },
    Idproof:{
        type:String,
        
    },
    Remark:{
        type:String
    },
    file:{
type:String
    }

},{
timestamps:true
})
module.exports = mongoose.model("podDetails",podDetailsSchema)