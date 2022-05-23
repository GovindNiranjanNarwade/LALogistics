const city = require("../model/city_model")
exports.getAllCity = async(req,res)=>{
    try {
        const result = await city.find()
        res.json({
            count:result.length,
            success:true,
            message:"All city with their State",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}