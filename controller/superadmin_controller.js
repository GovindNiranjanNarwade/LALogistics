const admin = require("../model/admin_model")
const bcrypt = require("bcryptjs")
exports.CreateAdmin = async(req,res)=>{
    try {
        const result = await admin.create({
            name:req.body.name,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password,10)
        })
        res.json({
            success:true,
            message:"create  Admin Details",
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
