const admin = require("../model/admin_model")
// const bcrypt = require("bcryptjs")
exports.CreateAdminDetails = async(req,res)=>{
    try {
        const result = await admin.create(req.body)
        res.json({
            success:true,
            message:"create  Admin Details",
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
exports.getAdmin = async(req,res)=>{
    try {
        const result = await admin.find()
        res.json({
            count:result.length,
            success:true,
            message:"All Admin",
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
