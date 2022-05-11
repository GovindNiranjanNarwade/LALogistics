const billing = require("../model/billing_model")
exports.CreateBillingDetails = async(req,res)  => {
try {
    const result = await billing.create(req.body)
    res.json({
        success:true,
        message:"Create Billing  Details",
        data:result
    })

} catch (error) {
    res.json({
        success:true,
        message:"Something Went Worng",
        data:null
    })
}
}
exports.getBillingDetails = async(req,res)=>{
    try {
        const result = await billing.find()
        res.json({
            count:result.length,
            success:true,
            message:"get Billing Details",
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
exports.deleteBillingDetails = async(req,res)=>{
    try {
        const result = await billing.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Delete  Billing Details",
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
exports.updateBillingDetails = async(req,res)=>{
    try {
        const result = await billing.findByIdAndUpdate(req.params.id,req.body, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update  Billing Details",
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
exports.getSingleBillingDetails = async(req,res)=>{
    try {
        const result = await billing.findById(req.params.id)
        res.json({
            success:true,
            message:"get a Single Billing Details",
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