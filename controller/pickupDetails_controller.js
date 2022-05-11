const PickupDetails = require("../model/PickupDetails_model")
exports.createPickupDetails=async (req,res)=>{
    try {
       const result = await  PickupDetails.create(req.body)
       res.json({
        success:true,
        message:"create   Pickup Details",
        data:result
    })
    } catch {
        res.json({
            success:true,
            message:"Something Went Worng" + Error,
            data:null
        })
    }
    }
    exports.getPickupDetails= async(req,res)=>{
        try {
           const result = await PickupDetails.find()
           res.json({
            count:result.length,
            success:true,
            message:"get  Pickup Details",
            data:result
        })
        } catch {
            res.json({
                success:true,
                message:"Something Went Worng",
                data:null
            })
        }
        }
        exports.deletePickupDetails= async(req,res)=>{
            try {
               const result = await PickupDetails.findByIdAndDelete(req.params.id)
               res.json({
                success:true,
                message:"Delete  Pickup Details",
                data:result
            })
            } catch {
                res.json({
                    success:true,
                    message:"Something Went Worng",
                    data:null
                })
            }
            }