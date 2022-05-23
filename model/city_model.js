const mongoose = require("mongoose")

const citySchema = mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    state:{
        type:String
    },
    
       

},{
timestamps:true
})
module.exports = mongoose.model("city",citySchema)