const PODDetails = require("../model/podDetails_model")
exports.createPodDetails=async (req,res)=>{
    try {
       const result = await  PODDetails.create(req.body)
       res.json({
        success:true,
        message:"create   POD Details ",
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
    exports.getPodDetails= async(req,res)=>{
        try {
           const result = await PODDetails.find()
           res.json({
            count:result.length,
            success:true,
            message:"get  POD Details",
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
        exports.deletePODDetails= async(req,res)=>{
            try {
               const result = await PODDetails.findByIdAndDelete(req.params.id)
               res.json({
                success:true,
                message:"Delete  POD Details",
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