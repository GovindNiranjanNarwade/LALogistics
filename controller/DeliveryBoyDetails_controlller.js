const DeliveryBoyDetails =require("../model/DeliveryBoyDetails_model")
const Group = require('../model/Group_model')
const bcrypt = require("bcryptjs")
exports.CreateDeliveryBoyDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyDetails.create({
            DeliveryBoyId:req.body.DeliveryBoyId,
            DeliveryBoyName:req.body.DeliveryBoyName,
            DeliveryBoyEmail:req.body.DeliveryBoyEmail,
            DeliveryBoyMobile:req.body.DeliveryBoyMobile,
            DeliveryBoyPassword:bcrypt.hashSync(req.body.DeliveryBoyPassword,10),
            DeliveryBoyAddress:req.body.DeliveryBoyAddress,
            DeliveryBoyCity:req.body.DeliveryBoyCity,
            DeliveryBoyState:req.body.DeliveryBoyState,
            GroupId:req.body.GroupId
        })
        res.json({
            success:true,
            message:"Create Delivery Boy Details",
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
exports.getDeliveryBoyDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyDetails.aggregate([
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
            message:"get Delivery Boy Details",
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
exports.deleteDeliveryBoyDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyDetails.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Delete  Delivery Boy Details",
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
exports.updateDeliveryBoyDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyDetails.findByIdAndUpdate(req.params.id,req.body, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Delivery Boy Details",
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
exports.getSingleDeliveryBoyDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyDetails.findById(req.params.id)
        res.json({
            success:true,
            message:"get a Single Delivery Boy Details",
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