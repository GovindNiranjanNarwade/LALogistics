const customer = require("../model/customer_model")
const Group = require('../model/Group_model')
const bcrypt = require("bcryptjs")
exports.CreateCustomer = async(req,res)=>{
    try {
        const result = await customer.create(req.body)
        res.json({
            success:true,
            message:"Create Customer Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:`Something  went wrong `+{error},
            data:null
        })  
    }
}
exports.getCustomer = async(req,res)=>{
    try {
        const result = await customer.aggregate([
            {
                $lookup:{
                    from:'groups',
                    localField:'GroupId',
                    foreignField:'GroupId',
                    as:"Group"
                }
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Customer Details",
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
exports.deleteCustomer = async(req,res)=>{
    try {
        const result = await customer.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Delete Customer Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateCustomer = async(req,res)=>{
    try {
        const result = await customer.findByIdAndUpdate(req.params.id,{
            CustomerId:req.body.CustomerId,
            CustomerName:req.body.CustomerName,
            Email:req.body.Email,
            Mobile:req.body.Mobile,
            Password:bcrypt.hashSync(req.body.Password,10),
            BillingAddress:req.body.BillingAddress,
            City:req.body.City,
            CompanyName:req.body.CompanyName,
            GstNo:req.body.GstNo,
            GroupId:req.body.GroupId
        }, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Customer Details",
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
exports.getSingleCustomer = async(req,res)=>{
    try {
        const result = await customer.findById(req.params.id)
        res.json({
            success:true,
            message:"get a Single Customer Details",
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