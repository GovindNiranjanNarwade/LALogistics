const mongoose = require("mongoose")

const citySchema = mongoose.Schema({
    id:{
        type:Number
    },
    City:{
        type:String
    },
    State:{
        type:String
    },
    StateId:{
        type:Number
    }
    
       

},{
timestamps:true
})
module.exports = mongoose.model("city",citySchema)