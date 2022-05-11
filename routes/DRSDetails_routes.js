const express = require("express")

const {createDRSDetails,getDRSDetails,deleteDRSDetails} =require("../controller/DRSDetails_controller")

const router = express.Router()

router.route("/createDRSDetails").post(createDRSDetails)
// @url => http://192.168.43.220:5000/api/v1/DRS/createDRSDetails
// @method => POST
router.route("/getDRSDetails").get(getDRSDetails)
// @url => http://192.168.43.220:5000/api/v1/DRS/getDRSDetails
// @method => GET
router.route("/deleteDRSDetails").delete(deleteDRSDetails)
// @url => http://192.168.43.220:5000/api/v1/DRS/deleteDRSDetails
// @method => DELETE


module.exports = router