const express = require("express")

const {createPickupDetails,getPickupDetails,deletePickupDetails} =require("../controller/pickupDetails_controller")

const router = express.Router()

router.route("/createPickupDetails").post(createPickupDetails)
// @url => http://192.168.43.220:5000/api/v1/createPickupDetails
// @method => POST
router.route("/getPickupDetails").get(getPickupDetails)
// @url => http://192.168.43.220:5000/api/v1/getPickupDetails
// @method => GET
router.route("/deletePickupDetails").delete(deletePickupDetails)
// @url => http://192.168.43.220:5000/api/v1/deletePickupDetails
// @method => DELETE


module.exports = router