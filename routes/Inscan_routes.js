const express = require("express")
const{updateInscanDetails,getSingleInscanDetails,deleteInscanDetails,getInscanDetails,createInscanDetails}=require("../controller/Inscan_Controller")
const router = express.Router()
router.route("/CreateInscanDetails").post(createInscanDetails )
// route http://192.168.43.220:5000/api/v1/CreateInscanDetails
//method post
router.route("/getInscanDetails").get(getInscanDetails)
// route http://192.168.43.220:5000/api/v1/getInscanDetails
//method get
router.route("/deleteInscanDetails/:id").delete(deleteInscanDetails)
// route http://192.168.43.220:5000/api/v1/deleteInscanDetails
//method delete
router.route("/updateInscanDetails/:id").put(updateInscanDetails)
// route http://192.168.43.220:5000/api/v1/updateInscanDetails
//method put
router.route("/getSingleInscanDetails/:id").get(getSingleInscanDetails)
// route http://192.168.43.220:5000/api/v1/getSingleInscanDetails
//method get

module.exports = router 