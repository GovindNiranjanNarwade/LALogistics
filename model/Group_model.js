const mongoose = require("mongoose")

const GroupSchema = mongoose.Schema({
    GroupName:{
        type:String,
        
    },
    Group:{
        type:String,
       
    },
  
    

},{
timestamps:true
})
module.exports = mongoose.model("Group",GroupSchema)