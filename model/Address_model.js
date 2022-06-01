const mongoose = require("mongoose")

const addressSchema = mongoose.Schema({
    Address:{
        type:String
    },
    StateId:{
        type:Number
    },
    Cityid:{
        type:String
    },
    AddressType:{
        type:String
    },
    SourceId:{
        type:String
    }
},{
timestamps:true
})
module.exports = mongoose.model("address",addressSchema)