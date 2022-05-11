const menifestDetails = require("../model/menifest_model")
exports.createMenifestDetails=async (req,res)=>{
try {
   const result = await  menifestDetails.create(req.body)
   res.json({
    success:true,
    message:"create  Menifest Details",
    data:result
})
} catch {
    res.json({
        success:true,
        message:"Something Went Worng " + Error,
        data:null
    })
}
}
exports.getMenifestDetails= async(req,res)=>{
    try {
       const result = await menifestDetails.find()
       res.json({
        count:result.length,
        success:true,
        message:"get menifest Details",
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
    exports.deleteMenifestDetails= async(req,res)=>{
        try {
           const result = await menifestDetails.findByIdAndDelete(req.params.id)
           res.json({
            success:true,
            message:"Delete  menifest Details",
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
        exports.updateMenifestDetails = async(req,res)=>{
            try {
                const result = await menifestDetails.findByIdAndUpdate(req.params.id,req.body, {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update Menifest Details",
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
        exports.getSingleMenifestDetails = async(req,res)=>{
            try {
                const result = await menifestDetails.findById(req.params.id)
                res.json({
                    success:true,
                    message:"get a Single menifest  Details",
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