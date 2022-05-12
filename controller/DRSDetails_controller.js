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
            exports.updateDRSDetails = async(req,res)=>{
                try {
                    const result = await DRSDetails.findByIdAndUpdate(req.params.id,req.body, {
                        new: true,
                        runValidators: true,})
                    res.json({
                        success:true,
                        message:"update DRS Details Details",
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
            exports.getSingleDRSDetails = async(req,res)=>{
                try {
                    const result = await DRSDetails.findById(req.params.id)
                    res.json({
                        success:true,
                        message:"get a Single DRS Details  ",
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