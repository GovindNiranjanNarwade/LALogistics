const DRSDetails = require("../model/DRSdetails_model")
exports.createDRSDetails=async (req,res)=>{
    try {
       const result = await  DRSDetails.create(req.body)
       res.json({
        success:true,
        message:"create   DRS Details",
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
    exports.getDRSDetails= async(req,res)=>{
        try {
           const result = await DRSDetails.find()
           res.json({
            count:result.length,
            success:true,
            message:"get  DRS Details",
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
        exports.deleteDRSDetails= async(req,res)=>{
            try {
               const result = await DRSDetails.findByIdAndDelete(req.params.id)
               res.json({
                success:true,
                message:"Delete  DRS Details",
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