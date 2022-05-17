const docket = require("../model/docket_model")
exports.CreateDocketDetails = async(req,res)=>{
    try {
        const result = await docket.create(req.body)
        res.json({
            success:true,
            message:"create  Docket Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+error,
            data:null
        })  
    }
}
exports.getDocketDetails = async(req,res)=>{
    try {
        const result = await docket.find()
        res.json({
            count:result.length,
            success:true,
            message:"get  Docket Details",
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
exports.deleteDocket = async(req,res)=>{
    try {
        const result = await docket.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Delete Docket Details",
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
exports.updateDocket = async(req,res)=>{
    try {
        const result = await docket.findByIdAndUpdate(req.params.id,req.body, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Docket Details",
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
exports.getSingleDocket = async(req,res)=>{
    try {
        const result = await docket.findById(req.params.id)
        res.json({
            success:true,
            message:"get a Single Docket Details",
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
exports.SearchDocketByStatus = async(req,res)=>{
    try {
        const result = await docket.findById(req.body.status)
        res.json({
            success:true,
            message:"Search  Docket  Details By Status",
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