const mongoose = require("mongoose")
const billingSchema = mongoose.Schema({
    NameofCustomer:{
        type:String,
        
    },
    CustomerEmail:{
        type:String,
      
    },
    CustomerMobile:{
        type:Number,
        
    },
    GSTNO:{
        type:String,
       },
    CustomerAddress:{
        type:String,
        
    },
    INVOICE:{
        type:String
    },
    InvoiceDate:{
        type:Date
    },
    INVOICEDuration:{
        type:String
    },
    PlaceofSupply:{
        type:String
    },
    Particular:{
        type:String
    },
    HSNCode:{
        type:String
    },
    NONTAXBLEVALUE:{
        type:String
    },
    TAXBLEVALUE:{
        type:String
    },
    CGST:{
        Rate:{
            type:Number
        },
        Amount:{
            type:Number
        }
    },
    SGST:{
        Rate:{
            type:Number
        },
        Amount:{
            type:Number
        }
    },
    IGST:{
        Rate:{
            type:Number
        },
        Amount:{
            type:Number
        }
    },
    SubTotal:{
        type:Number
    },
    Total:{
        type:String
    }

},{
timestamps:true
})
module.exports = mongoose.model("billing",billingSchema)