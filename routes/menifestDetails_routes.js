const express = require("express")
const{createMenifestDetails,getMenifestDetails,deleteMenifestDetails,updateMenifestDetails,getSingleMenifestDetails}=require("../controller/menifestDetails_controller")
const router = express.Router()
router.route("/CreateMenifestDetails").post( createMenifestDetails)
// route http://192.168.43.220:5000/api/v1/CreateMenifestDetails
//method post
router.route("/getMenifestDetails").get(getMenifestDetails)
// route http://192.168.43.220:5000/api/v1/getMenifestDetails
//method get
router.route("/deleteMenifestDetails/:id").delete(deleteMenifestDetails)
// route http://192.168.43.220:5000/api/v1/deleteMenifestDetails
//method delete
router.route("/updateMenifestDetails/:id").put(updateMenifestDetails)
// route http://192.168.43.220:5000/api/v1/updateMenifestDetails
//method put
router.route("/SingleMenifestDetails/:id").get(getSingleMenifestDetails)
// route http://192.168.43.220:5000/api/v1/SingleMenifestDetails
//method put

module.exports = router 