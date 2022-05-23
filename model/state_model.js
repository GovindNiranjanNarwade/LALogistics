const mongoose = require("mongoose")

const stateSchema = mongoose.Schema({
    state:{
        type:String
    },
 
    City:{
        type:String
    }
       

},{
timestamps:true
})
module.exports = mongoose.model("state",stateSchema)