const mongoose = require("mongoose")

const statusSchema = mongoose.Schema({
    statusId:{
        type:String
    },
    Status:{
        type:String
    },
    
       

},{
timestamps:true
})
module.exports = mongoose.model("status",statusSchema)