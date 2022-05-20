const express = require("express")

const {CreateAdminDetails,getAdmin} =require("../controller/admin_controller")

const router = express.Router()

router.route("/Createadmin").post(CreateAdminDetails)
// @url => http://192.168.43.220:37234/api/v1/Createadmin
// @method => post
router.route("/getadmin").get( getAdmin)
// @url => http://192.168.43.220:37234/api/v1/getadmin
// @method => GET


module.exports = router