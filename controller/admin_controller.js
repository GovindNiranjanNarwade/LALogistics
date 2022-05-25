const admin = require("../model/admin_model")
const Group = require("../model/Group_model")
const bcrypt = require("bcryptjs")
exports.CreateAdminDetails = async(req,res)=>{
    try {
        const result = await admin.create({
            Name:req.body.Name,
            Email:req.body.Email,
            Password:bcrypt.hashSync(req.body.Password,10),
            GroupId:req.body.GroupId,
         
           
        })
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
        const result = await admin.find({
            '$lookup' : {
                'from' : "groups",
                'localField' : "GroupId",
                'foreignField' : "GroupId",
                'as' : "groups"
            }
            })
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
