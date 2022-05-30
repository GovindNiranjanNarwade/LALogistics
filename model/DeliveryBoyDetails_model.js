const mongoose = require("mongoose")

const DeliveryBoyDetailsSchema = mongoose.Schema({
    DeliveryBoyId:{
        type:String,
        
    },
    DeliveryBoyName:{
     type:String,
    },
    DeliveryBoyEmail:{
        type:String,
      
    },
    DeliveryBoyMobile:{
        type:Number,
        
    },
    DeliveryBoyPassword:{
        type:String,
        
    },
    DeliveryBoyAddress:{
        type:String,
        
    },
    DeliveryBoyCity:{
        type:String,
        
    },
    DeliveryBoyState:{
        type:String,
        
    },
    GroupId:{
        type:Number
    },
    Cityid:{
        type:String
    },
    StateId:{
        type:Number
    }
   

},{
timestamps:true
})
module.exports = mongoose.model("DeliveryBoy",DeliveryBoyDetailsSchema)