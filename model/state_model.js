const mongoose = require("mongoose")

const stateSchema = mongoose.Schema({
    state:{
        type:String
    },
    isoCode:{
        type:String
    },
    countryCode:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    }

       

},{
timestamps:true
})
module.exports = mongoose.model("state",stateSchema)