const city = require("../model/city_model")
const state = require("../model/state_model")
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
exports.getCityBytheirState = async(req,res)=>{
    try {
        const result = await city.aggregate([
            {
                $lookup:{
                    from:'states',
                    localField:'name',
                    foreignField:'name',
                    as:"State"
                }
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"All city with their specific  State",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}