const express = require("express")

const {createPickupDetails,getPickupDetails,deletePickupDetails,allocationbyVendor} =require("../controller/pickupDetails_controller")

const router = express.Router()

router.route("/createPickupDetails").post(createPickupDetails)
// @url => http://192.168.43.220:5000/api/v1/createPickupDetails
// @method => POST
router.route("/getPickupDetails").get(getPickupDetails)
// @url => http://192.168.43.220:5000/api/v1/getPickupDetails
// @method => GET
router.route("/deletePickupDetails/:id").delete(deletePickupDetails)
// @url => http://192.168.43.220:5000/api/v1/deletePickupDetails
// @method => DELETE
router.route("/allocationbyvendor/:id").get(allocationbyVendor)
// @url => http://192.168.43.220:5000/api/v1/allocationbyvendor
// @method => DELETE


module.exports = router