const mongoose = require("mongoose")
const InscanDetailsSchema = mongoose.Schema({
    Branch:{
        type:Date,
        
    },
    Growdown:{
        type:String,
      
    },
    DispatchOn:{
        type:Date,
        
    },
    Menifest:{
        type:String,
       },
    FromStation:{
        type:Date,
        
    },
    ArrivalKM:{
        type:String,
        
    },
    DriverInfo:{
        Driver:{
            type:String,
            
        },
        ModeName:{
            type:String,
            
        },
        ModeType:{
            type:String,
            
        },
        DispatchTime:{
            type:String,
        },
        DispatchDate:{
            type:String
        },
        DriverMobile:{
            type:Number,
            
        },
        ArrivalTrough:{
            type:Date,
            
        },
        SERArrival:{
            type:String,
            
        },
    
        UnLoadingPersion:{
            type:String,
            
        },
       
        Remark:{
            type:String,
            
        },
    }
},{
timestamps:true
})
module.exports = mongoose.model("InscanDetails",InscanDetailsSchema)