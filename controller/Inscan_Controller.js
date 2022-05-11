const InscanDetails = require("../model/Inscan_model")
exports.createInscanDetails=async (req,res)=>{
try {
   const result = await  InscanDetails.create(req.body)
   res.json({
    success:true,
    message:"create  Inscan Details",
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
exports.getMenifestDetails= async(req,res)=>{
    try {
       const result = await InscanDetails.find()
       res.json({
        count:result.length,
        success:true,
        message:"get Inscan Details",
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
    exports.deleteInscanDetails= async(req,res)=>{
        try {
           const result = await InscanDetails.findByIdAndDelete(req.params.id)
           res.json({
            success:true,
            message:"Delete  Inscan Details",
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
        exports.updateInscanDetails = async(req,res)=>{
            try {
                const result = await InscanDetails.findByIdAndUpdate(req.params.id,req.body, {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update Inscan Details",
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
        exports.getSingleInscanDetails = async(req,res)=>{
            try {
                const result = await InscanDetails.findById(req.params.id)
                res.json({
                    success:true,
                    message:"get a Single Inscan  Details",
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