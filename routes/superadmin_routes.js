const express = require("express")

const {CreateAdmin,getAdmin} =require("../controller/superadmin_controller")

const router = express.Router()

router.route("/Createadmin").post(CreateAdmin)
// @url => http://192.168.43.220:5000/api/v1/Createadmin
// @method => post
router.route("/getadmin").get( getAdmin)
// @url => http://192.168.43.220:5000/api/v1/getadmin
// @method => GET


module.exports = router