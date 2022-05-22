const mongoose = require("mongoose")

const stateSchema = mongoose.Schema({
 
    State:{
        City:{
            type:String
        }
    }
    
   
  
    

},{
timestamps:true
})
module.exports = mongoose.model("state",stateSchema)