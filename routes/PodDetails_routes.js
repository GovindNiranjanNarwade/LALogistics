const express = require("express")

const {createPodDetails,getPodDetails,deletePODDetails} =require("../controller/podDetails_controller")
const upload = require("../middleware/uploads_middleware")

const router = express.Router()

router.route("/createPodDetails").post(upload.single('file'),createPodDetails)
// @url => http://192.168.43.220:5000/api/v1/createPodDetails
// @method => POST
router.route("/getPodDetails").get(getPodDetails)
// @url => http://192.168.43.220:5000/api/v1/getPodDetails
// @method => GET
router.route("/deletePODDetails").delete(deletePODDetails)
// @url => http://192.168.43.220:5000/api/v1/deletePODDetails
// @method => DELETE


module.exports = router