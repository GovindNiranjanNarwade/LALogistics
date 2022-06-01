const mongoose = require("mongoose")

const docketSchema = mongoose.Schema({
    DocketId:{
        type:String,
        
    },
    CustomerId:{
        type:String,
    },
    statusId:{
        type:String
    },
    Currentlocation:{
        type:String
    },
    ConsignerCompany:{
        type:String,
        
    },
    FullName:{
        type:String,
       },
    Mobile:{
        type:String,
        
    },
    Email:{
        type:String,
        
    },
    NoOfPacking:{
        type:Number,
        
    },
    MethodOfPacking:{
        type:String,
        
    },
    ActualWeight:{
        type:String,
        
    },
    Volume:{
        type:String,
        
    },
    BoxType:{
        type:String,
        
    },
    ShipingDate:{
        type:String,
        
    },
    DeliveryDate:{
        type:String,
        
    },
    AMB:{
        type:String,
        
    },
    REF:{
        type:String,
        
    },
    FRZ:{
        type:String,
        
    },
    DRYICE:{
        type:String,
        
    },
    Pkg:{
        type:String,
        
    },
    Origin:{
        type:String,
        
    },
    Destination:{
        type:String,
        
    }, 
    ReceiverName:{
        type:String
    },
    ReceiverMobile:{
        type:String
    },
    Payment:{
        type:String
    },
    PaymentRecived:{
        type:Boolean
    },
    SourceId:{
        type:String
    }

},{
timestamps:true
})
module.exports = mongoose.model("docket",docketSchema)