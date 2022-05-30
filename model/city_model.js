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
    
       

},{
timestamps:true
})
module.exports = mongoose.model("city",citySchema)