const mongoose = require("mongoose")
const menifestDetailsSchema = mongoose.Schema({
    ModeType:{
        type:Date,
        
    },
    FreightMemo:{
        type:String,
      
    },
    BranchType:{
        type:Number,
        
    },
    Menifest:{
        type:String,
       },
    DispatchDate:{
        type:Date,
        
    },
    DispatchTime:{
        type:String,
        
    },
    Vendor:{
        type:String,
        
    },
    Vechical:{
        type:String,
        
    },
    VechicalType:{
        type:String,
        
    },
    DriverName:{
        type:String,
        
    },
    DriverMobile:{
        type:Number,
        
    },
    EwBDate:{
        type:String,
        
    },
    VechicalVendor:{
        type:String,
        
    },

    LoadingPersion:{
        type:String,
        
    },
   
    Remark:{
        type:String,
        
    },
    

},{
timestamps:true
})
module.exports = mongoose.model("menifestDetails",menifestDetailsSchema)